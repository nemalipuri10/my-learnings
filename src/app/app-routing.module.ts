import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AbcComponent } from './abc/abc.component';
import { AppComponent } from './app.component';
import { TextareaComponent } from './textarea/textarea.component';
import { Form1Component} from './form1/form1.component';
import { FormDivComponent} from './form-div/form-div.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { Form8Component } from './form8/form8.component';
const routes:Routes=[
  {path: 'abc', component:AbcComponent },
  {path: 'app', component:AppComponent},
  {path: 'textarea', component:TextareaComponent},
  {path: 'Form1' , component:Form1Component},
  {path: 'Form', component:FormDivComponent},
  {path: 'Form2', component:Form2Component},
  {path: 'Form3', component:Form3Component},
  {path: 'Form4', component:Form4Component},
  {path: 'Form5', component:Form5Component},
  {path: 'Form6', component:Form6Component},
  {path: 'Form7', component:Form7Component},
  {path: 'Form8', component:Form8Component},
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
