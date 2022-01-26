import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import {FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb: FormBuilder) { }
  formProfile = this.fb.group({
    projectName:['oooo'],
    description:['Please enter at least 500 words'],
    startDate: ["2022-02-02"],
    endDate:["2022-02-04"],
    priority:['L']
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('Current form data is:', this.formProfile.value)
  }
}
