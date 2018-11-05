import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag: boolean = false;
  userType: String = '';
  message:String;

  userList = [
                   {userName: 'pandey1@123', password: 'pandey1@123', type: 'admin'},
                   {userName: 'pandey2@123', password: 'pandey2@123', type: 'admin'},
                   {userName: 'pandey3#123', password: 'pandey3#123', type: 'normal'},
                   {userName: 'pandey4#123', password: 'pandey4#123', type: 'normal'},
                ];


  constructor( private route: Router) { }

  ngOnInit() {
  }

  searchUser(user,password):number{
    for(let i=0; i< this.userList.length;i++){
      if(user==this.userList[i].userName && password==this.userList[i].password){
        return i;
      
      }
    }

  }

  loginForm(){
    if (this.flag == true){

      this.route.navigateByUrl('/home');

    }
    else {
      this.message = 'User Name/Password is Invalid.';
      
    }
    

    
  }
  checkuser(user,password){
    var pos = this.searchUser(user,password)
    
    if( pos>=0 && user==this.userList[pos].userName){
      this.flag = true;
      this.userType = this.userList[pos].type;

    }


  }



}
