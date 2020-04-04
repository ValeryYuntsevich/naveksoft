import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('verifyPassword').value)
    return null;
  else
    return { passwordMismatch: true };
};

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  hidePassword: boolean = true;
  hideVerifyPassword: boolean = true;
  base64File: string = null;
  filename: string = null;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  onFileSelect(e: any): void {
    try {
      const file = e.target.files[0];
      const fReader = new FileReader();
      fReader.readAsDataURL(file);
      fReader.onloadend = (_event: any) => {
      this.filename = file.name;
      this.base64File = _event.target.result;
    }
    } catch (error) {
      // this.filename = null;
      // this.base64File = null;
    }
  }

  onSubmit() {
    console.log('Your form data : ');
}

initRegisterForm() {
  this.userForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    verifyPassword: ['', [Validators.required]],
  }, { validator: passwordMatchValidator })
}


get password() { return this.userForm.get('password'); }
get verifyPassword() { return this.userForm.get('verifyPassword'); }


onPasswordInput() {
  if (this.userForm.hasError('passwordMismatch'))
    this.verifyPassword.setErrors([{ 'passwordMismatch': true }]);
  else
    this.verifyPassword.setErrors(null);
}




}
