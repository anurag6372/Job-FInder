import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm!: FormGroup;
  email:String="";
  password:String="";
  role:any;
  
  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('',[Validators.required])
    })
  }
  OnLogIn() {
    localStorage.setItem("role",this.role);
  console.log(this.email,this.password,this.role);
  }

}
