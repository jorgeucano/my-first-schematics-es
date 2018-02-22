import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyFirstSchemaComponent } from './my-schema/my-first-schema.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstSchemaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
