import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) {}

  emailRegex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
  passwordRegex ="(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@#$^!%?&])[A-Za-z\d$@#$^!%?&].{7,15}";

  signUpForm = this.formbuilder.group({
    email: ['',[Validators.required,Validators.pattern(this.emailRegex)]],
    userName:['',[Validators.required,Validators.minLength(3)]],
    mobileNumber:['',[Validators.required,Validators.minLength(10)]],
    password:['',[Validators.required,Validators.pattern(this.passwordRegex)]],
    confirmPassword:['',Validators.required]
  }); 

  onSubmit(){
    console.log(this.signUpForm.value);
  }

  onPasswordMatch() {
    if (this.confirmPasswordcontrols.value == this.signUpForm.controls['password'].value) {
      this.confirmPasswordcontrols.setErrors(null);
    } 
    else {
      this.confirmPasswordcontrols.setErrors({ mismatch: true });
    }
  }

  onlyNumbersAllowed(event : any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode >57)){
      return false;
    }
    return true;
  }

  get email(){
    return this.signUpForm.get('email');
  }
  get emailcontrols(){
    return this.signUpForm.controls['email'].errors;
  }

  get userName(){
    return this.signUpForm.get('userName');
  }
  get userNamecontrols(){
    return this.signUpForm.controls['userName'].errors;
  }

  get mobileNumber(){
    return this.signUpForm.get('mobileNumber');
  }
  get mobileNumbercontrols(){
    return this.signUpForm.controls['mobileNumber'].errors;
  }

  get password(){
    return this.signUpForm.get('password');
  }
  get passwordcontrols(){
    return this.signUpForm.controls['password'].errors;
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }
  get confirmPasswordcontrols(){
    return this.signUpForm.controls['confirmPassword'];
  }

  ngOnInit(): void {
  }

}