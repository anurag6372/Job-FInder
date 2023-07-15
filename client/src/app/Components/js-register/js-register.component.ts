import { Component } from '@angular/core';

@Component({
  selector: 'app-js-register',
  templateUrl: './js-register.component.html',
  styleUrls: ['./js-register.component.css']
})
export class JSRegisterComponent {
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
