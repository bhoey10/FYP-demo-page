//Imports that are required modules and components from Angular core and forms packages taken from Angular.
//DemoPageComponent and reactive forms module also included
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoPageComponent } from './demo-page/demo-page.component';

// A decorator to define the root components of the application
// Declaring the main component of the application (AppComponent) and the DemoPageComponent.
@NgModule({
  declarations: [
    AppComponent,
    DemoPageComponent
  ],
  //Importing AppRoutingModule for routing and ReactiveFormsModule for having a reactive form
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
