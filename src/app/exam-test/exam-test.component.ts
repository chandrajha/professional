import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-test',
  templateUrl: './exam-test.component.html',
  styleUrls: ['./exam-test.component.css']
})
export class ExamTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  score=0;
  questions=[
    {
      q:'Capital of bihar',
      options : ['Patna','Lucknow','Kohima','itanagar'],
      ans:'Patna',
      selectedanswer:'',
      status:'1'
    },

    {
      q:'Capital of UP',
      options : ['Patna','Lucknow','Kohima','itanagar'],
      ans:'Lucknow',
      selectedanswer:'',
      status:'1'
    },


    {
      q:'Capital of MP',
      options : ['Patna','Lucknow','Bhopal','itanagar'],
      ans:'Bhopal',
      selectedanswer:'',
      status:'1'
    },


    {
      q:'Capital of Assam',
      options : ['Patna','Dispur','Kohima','itanagar'],
      ans:'Dispur',
      selectedanswer:'',
      status:'1'
    },
    {
      q:'Capital of Haryana',
      options : ['Patna','Lucknow','Kohima','Chandigarh'],
      ans:'Chandigarh',
      selectedanswer:'',
      status:'1'
    },
    {
      q:'Capital of Rajsthan',
      options : ['Jaypur','Lucknow','Kohima','itanagar'],
      ans:'Jaypur',
      selectedanswer:''
      ,status:'1'
    }

  ];

  lockanswer(i,option){
    if(this.questions[i].ans==option){
      this.questions[i].selectedanswer=option;
      console.log("Your answer is correct",this.questions[i].selectedanswer);
      this.score+=1;
    }
    
    this.questions[i].status='0';
  }

  addquestion(f: FormData){

  let  obj={
    q:'Capital of Rajsthan',
    options : ['Jaypur','Lucknow','Kohima','itanagar'],
    ans:'Jaypur',
    selectedanswer:''
    ,status:'1'
    };

    obj.q=f.value.q1;
    obj.options[0]=f.value.op1;
    obj.options[1]=f.value.op2;
    obj.options[2]=f.value.op3;
    obj.options[3]=f.value.op4;
    obj.ans=f.value.ans;
    obj.selectedanswer='';
    obj.status='1';

    this.questions.push(obj);

    

 
}

}
