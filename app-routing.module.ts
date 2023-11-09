//Imports that are required modules and components from Angular core and forms packages taken from Angular.
//Importing the DemoPageComponent also
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoPageComponent } from './demo-page/demo-page.component';

//The application routes using router module
//The path to the DeomPageComponent is defined
const routes: Routes = [
  {path: 'demo-page', component: DemoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
