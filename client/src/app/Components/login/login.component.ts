import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


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
  constructor(private router:Router){}
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
    if (this.role=="Recruiter" && this.email!= '' && this.password !='') {
      this.router.navigateByUrl('/rlogin');
      
    } 
    if (this.role=="Job Seeker" && this.email!= '' && this.password !=''){
      
      this.router.navigateByUrl('/');
    }
  }

}
