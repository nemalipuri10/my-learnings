import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  constructor(private fb: FormBuilder) { }
    profileForm=this.fb.group({
        firstname:['sreenivas'],
        lastname:['nemalipuri'],
        email:['nemalipuri@gmail.com'],
        phone:['9052732389'],
        message:['enter some text']
    })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('Current form data is:', this.profileForm.value)
  }
}
