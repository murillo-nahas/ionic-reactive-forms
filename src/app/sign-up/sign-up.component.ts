import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  customer: Customer;

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      name: [this.customer?.name ?? '', [Validators.required]],
      lastName: [this.customer?.name ?? '', [Validators.required]],
      email: [this.customer?.name ?? '', [Validators.required]],
      password: [this.customer?.password ?? '', [Validators.required]],
    });
  }

  customerFormSubmit() {
    console.log(this.customerForm.value);
    this.customerForm.reset();
  }
}
