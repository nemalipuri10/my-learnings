import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  constructor(private fb: FormBuilder) { }
    formProfile=this.fb.group({
      firstname:['sreeni'],
      lastname:['nemali'],
      organization:['software'],
      email:['sreenivas@gmail.com'],
      workph:['12345'],
      houseph:['67890'],
      cellph:['9876543210'],
      fax:['258444'],
      address1:['abpalli'],
      address2:['ypalem'],
      city:['ap'],
      state:['ap'],
      zipcode:['523327'],
      country:['india'],
    })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('present data:' ,this.formProfile.value);
  }
}
