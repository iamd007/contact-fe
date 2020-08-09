import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {FormControl, Validators} from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private dialogRef: MatDialogRef<ContactComponent>) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

  onClose() {
    this.dialogRef.close();
  }

}
