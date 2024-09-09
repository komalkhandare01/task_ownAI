import { CommonModule } from '@angular/common';
import { Component,ChangeDetectorRef  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    orderType: new FormControl('', [Validators.required]),
    orderNo : new FormControl('', [Validators.required]),
    receivedOn : new FormControl('', [Validators.required]),
    receivedFromName : new FormControl('', [Validators.required]),
    receivedFromEmail : new FormControl('', [Validators.required]),
    startDate : new FormControl('', [Validators.required]),
    endDate : new FormControl('', [Validators.required]),
    budget : new FormControl('', [Validators.required]),
    currency : new FormControl('', [Validators.required]),

    // jobTitle : new FormControl('', [Validators.required]),
    // reqId : new FormControl('', [Validators.required]),

    // name : new FormControl(''),
    // contactDuration : new FormControl(''),
    // billRate : new FormControl(''),
    // billRateCurrency : new FormControl(''),
    // standardTime : new FormControl(''),
    // standardTimeCurrency : new FormControl(''),
    // overTime : new FormControl(''),
    // overTimeCurrency : new FormControl(''),
  });

  // constructor() {  }
  
  onSubmit() {
    if(!this.myForm.valid){
      return;
    }
    console.log(this.myForm.value);
    console.log(this.forms.map(f => f.value));
  }

  createNewForm() {
    const talentForm = this.fb.group({
      jobTitle: ['',[Validators.required]],
      reqId: ['',[Validators.required]],

      name : [''],
      contactDuration : [''],
      billRate : [''],
      billRateCurrency : [''],
      standardTime : [''],
      standardTimeCurrency : [''],
      overTime : [''],
      overTimeCurrency : [''],
    });

    this.forms.push(talentForm);
  }

  resetForm() {
    this.myForm.reset(); // This will reset the form values
  }



//  =====================================

  forms: FormGroup[] = [];

  constructor(private fb: FormBuilder) {}

  // createNewForm() {
  //   const form = this.fb.group({
  //     name: [''],
  //     email: ['']
  //   });

  //   this.forms.push(form);
  // }

  deleteForm(index: number) {
    this.forms.splice(index, 1);
  }

  logFormsData() {
    console.log(this.forms.map(f => f.value));
  }

}
