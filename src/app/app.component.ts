import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveForms';
  registrationform: FormGroup;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.registrationform = this.fb.group({
     username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email: ['', [Validators.required, Validators.email]],
     state: ['', Validators.required],
     terms:['', Validators.requiredTrue]
    })
    
    //this.registrationform.valueChanges.subscribe(console.log);
  }

  get username()
  {
    return this.registrationform.get('username');
  }

  get password()
  {
    return this.registrationform.get('password');
  }

  get email()
  {
    return this.registrationform.get('email');
  }

  get state()
  {
    return this.registrationform.get('state');
  }

  get terms()
  {
    return this.registrationform.get('terms');
  }

  userData;
  login(data){
    localStorage.setItem("userData", JSON.stringify(data.value));
    this.userData = JSON.parse(localStorage.getItem("userData"));
    
  }

}
