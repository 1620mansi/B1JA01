import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) {}

  emailRegex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
  passwordRegex ="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$^!%*?&])[A-Za-z\d$@#$^!%*?&].{7,15}";

  loginForm = this.formbuilder.group({
    email: ['',[Validators.required,Validators.pattern(this.emailRegex)]],
    password:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
  }); 

  onSubmit(){
    console.log(this.loginForm.value);
  }

  get email(){
    return this.loginForm.get('email');
  }
  get emailcontrols(){
    return this.loginForm.controls['email'].errors;
  }

  get password(){
    return this.loginForm.get('password');
  }
  get passwordcontrols(){
    return this.loginForm.controls['password'].errors;
  }

  ngOnInit(): void {
  }
}
