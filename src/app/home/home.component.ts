import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customer: Customer;

  customerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: [this.customer?.name ?? '', [Validators.required]],
      lastName: [this.customer?.lastName ?? '', [Validators.required]],
      email: [this.customer?.email ?? '', [Validators.required]],
      password: [this.customer?.password ?? '', [Validators.required]],
      gender: [this.customer?.gender ?? '', [Validators.required]],
    });
  }

  customerFormSubmit() {
    console.log(this.customerForm.value);
    this.customerForm.reset();
  }
}
