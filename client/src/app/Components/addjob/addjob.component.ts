import { Component } from '@angular/core';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent {
  displayVal1:string[]=[];
  displayVal2:string[]=[];
  display1:boolean=(Array.isArray(this.displayVal1) && this.displayVal1.length >0);
  display2:boolean=(Array.isArray(this.displayVal2) && this.displayVal2.length >0);
  getTag(val:any){
    if (val.length>0) {
      this.displayVal1.push(val);
      val ='';
      this.display1=(Array.isArray(this.displayVal1) && this.displayVal1.length >0);
    }

    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteTag(index:any){
    this.displayVal1.splice(index,1)
    this.display1=(Array.isArray(this.displayVal1) && this.displayVal1.length >0);
    console.log(index)
  }
  getSkill(val:any){
    if (val.length>0) {
      this.displayVal2.push(val);
      val ='';
      this.display2=(Array.isArray(this.displayVal2) && this.displayVal2.length >0);
    }

    // console.warn(val);
    // console.log(this.displayVal)
    // this.displayVal = val;
  }
  deleteSkill(index:any){
    this.displayVal2.splice(index,1)
    this.display2=(Array.isArray(this.displayVal2) && this.displayVal2.length >0);
    // console.log(index)
  }
}
