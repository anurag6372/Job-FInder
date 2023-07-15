import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-js-register',
  templateUrl: './js-register.component.html',
  styleUrls: ['./js-register.component.css']
})
export class JSRegisterComponent {
  
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      conformpassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')])
    })
  }
  
  
  displayVal:string[]=[];
  display:boolean=(Array.isArray(this.displayVal) && this.displayVal.length >0);
  getSkill(val:any){
    if (val.length>0) {
      
      this.displayVal.push(val);
      val ='';
      this.display=(Array.isArray(this.displayVal) && this.displayVal.length >0);
    }
  
    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteSkill(index:any){
    this.displayVal.splice(index,1) 
    this.display=(Array.isArray(this.displayVal) && this.displayVal.length >0); 
    // console.log(index)
  }

}
