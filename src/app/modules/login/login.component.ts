import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from '../common/service/jwt.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginError = false;
  registerError = false;
  registerForm!: FormGroup;
  registerErrorMessage = "";

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })

    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    })
  }

  login() {
  
  }

  register() {
    if (this.registerForm.valid && this.isPasswordIdentical(this.registerForm.value)) {
      this.loginService.register(this.registerForm.value)
      .subscribe({
        next: response => {
          this.jwtService.setToken(response.token);
          this.router.navigate(["/"]);
        },
        error: err => {
          this.registerError = true;
          if(err.error.mesage) {
            this.registerErrorMessage = err.error.mesage;
          } else {
            this.registerErrorMessage = "Coś poszło nie tak";
          }
        }
      });
    }
  }

  private isPasswordIdentical(register: any): boolean {
    if (register.password === register.repeatPassword) {
      this.registerError = false;
      return true;
    }
    this.registerError = true;
    this.registerErrorMessage = "Hasła nie są identyczne";
    return false;
  }


}
