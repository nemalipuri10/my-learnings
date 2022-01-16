import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-api1',
  templateUrl: './api1.component.html',
  styleUrls: ['./api1.component.css']
})
export class Api1Component implements OnInit {
    constructor() { }
  // component varibles
    name="sreenivas"; 
    usersList:any;
    currentPage=1;
  ngOnInit(): void {
    this.getUsersList();
  }
  getUsersList(){
    axios.get('https://reqres.in/api/users?page=2')
  .then( (response:any)=> {
    console.log("my testing code");
    console.log(response);
    this.usersList=response;
  })
  .catch( (error:any)=> { 
    console.log(error);
  })
  .then(function () { 
  });
  }
  getData(pageNum:number){
    console.log("calling function",pageNum);
    const urlVal='https://reqres.in/api/users?page='+pageNum;
    axios.get(urlVal)
  .then( (response:any)=> {
    console.log("my testing code");
    console.log(response);
    this.usersList=response;
  })
  .catch( (error:any)=> { 
    console.log(error);
  })
  .then(function () {  
  });
  }
  onNextPageClick(){
    console.log("+")
    this.currentPage+=1;
    this.getData(this.currentPage);
  }
  onPreviousPageClick(){
    console.log("-")
    this.currentPage=this.currentPage-1;
    this.getData(this.currentPage);
  }
  clickOnDelete(){

  }
  clickOnEdit(){

  }
}
