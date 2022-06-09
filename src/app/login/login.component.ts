import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerLogin } from '../models/customer-login.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  customer: CustomerLogin;

  customerLoginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.customerLoginForm = this.fb.group({
      email: [this.customer?.email ?? '', [Validators.required]],
      password: [this.customer?.password ?? '', [Validators.required]],
    });
  }

  customerLogin() {
    console.log(this.customerLoginForm.value);
    this.customerLoginForm.reset();
  }
}
