import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {

  constructor(private fb: FormBuilder) { }
    formData=this.fb.group({
    username:['sreenivas'],
  })
  ngOnInit(): void {
  }
  onSubmit(){
    console.log('data in form is:' ,this.formData.value)
  }
}
