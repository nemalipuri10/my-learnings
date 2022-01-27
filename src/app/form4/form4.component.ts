import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  constructor(private fb: FormBuilder) { }
    formData=this.fb.group({
      firstname:['qwer'],
      lastname:['asdf'],
      email:['afgdd@gmail.com'],
      phone:['9475849443'],
      areacode:['+91'],
      message:['ssssssssssss'],
      url:['https://www.google.com'],
    })

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('present data in form is:' ,this.formData.value);
  }
}
