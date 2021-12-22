import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea/textarea.component';
import { Form1Component } from './form1/form1.component';
import { FormDivComponent } from './form-div/form-div.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { Form8Component } from './form8/form8.component';


@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    TextareaComponent,
    Form1Component,
    FormDivComponent,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    Form8Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
