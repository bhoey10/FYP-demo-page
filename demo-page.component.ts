import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent implements OnInit {
  dataForm!: FormGroup; // Add the definite assignment assertion modifier (!)

  constructor(private formBuilder: FormBuilder) {}

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

  // Function to handle form submission
  onSubmit() {
    // Handle form submission logic here
    console.log(this.dataForm.value);
  }
}
