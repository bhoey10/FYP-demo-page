//Version 1 - Angular demo set up starter page
//Version 2 - Added in data fields, formBuiler, FormGroup, Validators and the button.

// Imports that are required modules and components from Angular core and forms packages taken from Angular.
// OnInit I found on Stack Overflow and it is described on Angular as:
// A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked. It is invoked only once when the directive is instantiated.
// Ref: https://stackoverflow.com/questions/55275025/how-to-set-value-to-form-control-in-reactive-forms-in-angular and  https://angular.io/api/core/OnInit
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Below is a Decorator that indicates that it is a component and to define the component metadata.
// It also provides metadata about the component, including its selector, templates, and styles.
@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  // Here I declared a FormGroup variable to hold form controls
  // When doing this I ran into trouble so I used AI (ChatGPT) to help me understand why a problem was arising. 
  // AI advised adding the definite assignment assertion modifier (!) to communicate with TypeScript that the property
  // is initialised before it is used.
  dataForm!: FormGroup;

  // Below is a Constructor function to inject FormBuilder service to create my form. 
  // This was seen on the Angular 'Using Forms for user input example' Ref: https://angular.io/start/start-forms
  constructor(private formBuilder: FormBuilder) {}

    // Lifecycle hook: ngOnInit is called after the component is initialized.
    // The form controls are then initialised using formBuilder.group() method which is part of 'Using Forms for user input example' Ref: https://angular.io/start/start-forms.
    // The form has 9 fields where 8 are required and the comments section at the end is optional Ref: https://angular.io/guide/form-validation#validating-input-in-template-driven-forms.
  ngOnInit(): void {
    this.dataForm = this.formBuilder.group({
      startDate: ['', Validators.required],
      greenfeedId: ['', Validators.required],
      owner: ['', Validators.required],
      farm: ['', Validators.required],
      diet: ['', Validators.required],
      animalType: ['', Validators.required],
      sex: ['', Validators.required],
      numberOfCattle: ['', Validators.required],
      comments: ['']
    });
  }

  // onSubmit is a function to handle form submission Ref:https://angular.io/start/start-forms
  onSubmit() {
    // this was included to handle form submission logic here
    console.log(this.dataForm.value);
  }
}
