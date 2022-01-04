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
import { Form9Component } from './form9/form9.component';
import { Form11Component } from './form11/form11.component';
import { Form10Component } from './form10/form10.component';
import { Form12Component } from './form12/form12.component';
import { Form13Component } from './form13/form13.component';
import { Form14Component } from './form14/form14.component';
import { Form15Component } from './form15/form15.component';
import { Form16Component } from './form16/form16.component';
import { Form17Component } from './form17/form17.component';
import { Form18Component } from './form18/form18.component';
import { Form19Component } from './form19/form19.component';
import { Form20Component } from './form20/form20.component';
import { Form21Component } from './form21/form21.component';
import { Form22Component } from './form22/form22.component';
const routes:Routes=[
  {path: 'abc', component:AbcComponent },
  {path: 'app', component:AppComponent},
  {path: 'textarea', component:TextareaComponent},
  {path: 'Form1', component:Form1Component},
  {path: 'Form', component:FormDivComponent},
  {path: 'Form2', component:Form2Component},
  {path: 'Form3', component:Form3Component},
  {path: 'Form4', component:Form4Component},
  {path: 'Form5', component:Form5Component},
  {path: 'Form6', component:Form6Component},
  {path: 'Form7', component:Form7Component},
  {path: 'Form8', component:Form8Component},
  {path: 'Form9', component:Form9Component},
  {path: 'Form11', component:Form11Component},
  {path: 'Form10', component:Form10Component},
  {path: 'Form12', component:Form12Component},
  {path: 'Form13', component:Form13Component},
  {path: 'Form14', component:Form14Component},
  {path: 'Form15', component:Form15Component},
  {path: 'Form16', component:Form16Component},
  {path: 'Form17', component:Form17Component},
  {path: 'Form18', component:Form18Component},
  {path: 'Form19', component:Form19Component},
  {path: 'Form20', component:Form20Component},
  {path: 'Form21', component:Form21Component},
  {path: 'Form22', component:Form22Component},
]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
