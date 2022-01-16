import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-api2',
  templateUrl: './api2.component.html',
  styleUrls: ['./api2.component.css']
})
export class Api2Component implements OnInit {

  constructor() { 
  }
  students:any=[]; 
  pageNumber=1;
  userEdit={id:0,email:'',first_name:'',last_name:'',avatar:''}
  userDelete={id:0,email:'',first_name:'',last_name:'',avatar:''};
  ngOnInit(): void {
   this.getData();
  }
 getData(){
  axios.get('https://reqres.in/api/users?page='+this.pageNumber)
  .then( (response)=> {
    this.students=response.data.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
 }

 previous(){
   console.log('previous-----------')
   //this.pageNumber=this.pageNumber-1;
   this.pageNumber -=1;
 this.getData()
 }
 next(){
   console.log("next..........")
   this.pageNumber +=1;
   this.getData()
 }
 delete(id:number){
console.log('delete----',id)
this.getUserData(id,'delete'); 
}
 edit(editUserID:number){
   console.log("eit-----",editUserID)
   this.getUserData(editUserID,'edit');
 }


 getUserData(id:number,type:string){
     axios.get('https://reqres.in/api/users/'+id)
   .then( (response)=> {
//console.log('user data is :',response)
if(type==='edit'){
  this.userEdit= response.data.data;
}
else if(type==='delete'){
  this.userDelete=response.data.data;
}


console.log(this.userEdit)
   })
   .catch(function (error) {
     console.log(error);
   })
   .then(function () {
   });
 }
 onSubmit(type:string,id:number){
   if(type==='edit'){
    axios.post('https://reqres.in/api/user/'+id,{
      first_name: 'Ram',
      last_name: 'krishna'
    })
    .then( (response)=> {
      this.students=response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
     console.log('this is submit call')
   }
   
   else if(type==='delete')
{
  axios.post('https://reqres.in/api/user/'+id)
  .then( (response)=> {
    this.students=response.data.data;
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
   console.log('this is submit call')
 }
}
}