import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  formGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),
    emailId: new FormControl('', [Validators.email, Validators.required]),
  });
  data;

  constructor(private dialogRef: MatDialogRef<ContactComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.data = data;
   }

  ngOnInit(): void {
    console.log(this.data);
    if(this.data != null) {
      this.intialise();
    }
  }

  intialise() {
    this.formGroup.setValue({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      emailId: this.data.emailId,
      mobileNumber: this.data.mobileNumber
    })
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

  onClose() {
    this.dialogRef.close();
  }

}
