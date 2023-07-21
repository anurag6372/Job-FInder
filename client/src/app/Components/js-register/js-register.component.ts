import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-js-register',
  templateUrl: './js-register.component.html',
  styleUrls: ['./js-register.component.css']
})
export class JSRegisterComponent {
constructor(private route:Router, private service: JobService){}
  
  myForm!: FormGroup;


  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      conformpassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      name: new FormControl('', [Validators.required]),
      portfoliolink: new FormControl('', [Validators.required]),
      skills : new FormArray([]),
    })
  }

  registerJobSeeker(){
    const tempJobSeeker = this.myForm.value;
    this.service.registerJobSeeker(tempJobSeeker).subscribe(
      data=> console.log(data),
      error=> console.log(error)
    )
  }
  

  displayVal:string[]=[];
  display:boolean=(Array.isArray(this.displayVal) && this.displayVal.length >0);
  getSkill(val:any){
    if (val.length>0) {
      const control=new FormControl(val, [Validators.required]);
    (<FormArray>this.myForm.get('skills')).push(control);
      this.displayVal.push(val);
      val ='';
      this.display=(Array.isArray(this.displayVal) && this.displayVal.length >0);
    }

    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteSkill(index:any){
    this.displayVal.splice(index,1);
    (<FormArray>this.myForm.get('skills')).removeAt(index);
    this.display=(Array.isArray(this.displayVal) && this.displayVal.length >0);
    // console.log(index)
  }
}