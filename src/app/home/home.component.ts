import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient,public route:Router) { }

  ngOnInit() {
    this.http.get('http://postalpincode.in/api/pincode/844506').subscribe(res=>console.log(res));
  }

  examTest(){
    this.route.navigateByUrl('/Exam Test');
  }

  

}
