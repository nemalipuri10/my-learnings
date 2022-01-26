import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-api3',
  templateUrl: './api3.component.html',
  styleUrls: ['./api3.component.css']
})
export class Api3Component implements OnInit {

  constructor() { 
  }
    students: any = [];
    pageNumber = 1;
    userEdit = {id:0,email:'',first_name:'',last_name:'',avatar:''};
    userDelete = {id:0,email:'',first_name:'',last_name:'',avatar:''};
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    axios.get('https://reqres.in/api/users?page=' + this.pageNumber)
    .then( (response) =>{
      this.students=response.data.data
    })
    .catch(function (error){
      console.log(error);
    })
    .then(function(){
    });
  }
  previous(){
    console.log('previous page----------');
    this.pageNumber -=1;
    this.getData()
  }
  next(){
    console.log('next page----------');
    this.pageNumber +=1;
    this.getData()
  }
  edit(editUserId:number){
    console.log('edit-----------',editUserId);
    this.getUserData(editUserId,'edit')
  }
  delete(id :number){
    console.log('delete-------', id);
    this.getUserData(id, 'delete');
  }
  getUserData(id:number, type:string){
    axios.get('https://reqres.in/api/users/' +id)
    .then((response) =>{
      if (type=== 'edit'){
        this.userEdit= response.data.data
      }
      else if(type==='delete'){
        this.userDelete=response.data.data
      }
      console.log(this.userEdit);
    })
    .catch(function(error){
      console.log(error);
    })
    .then(function(){
    });
  }
  onSubmit(type:string,id:number){
    if(type==='edit'){
      axios.post('https://reqres.in/api/user' +id,{
        first_name:'sreenivas',
        last_name:'nemalipuri'
      })
      .then((response) =>{
        this.students=response.data.data
      })
      .catch(function(error){
        console.log(error);
      })
      .then(function(){
      });
        console.log('this is edit call');
    }
    else if(type==='delete'){
      axios.post('https://reqres.in/api/user' +id)
      .then((response) =>{
        // 
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
      .then(function(){
      })
      console.log('this is delete call')
    }
  }
}
