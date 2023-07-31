import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent {
  constructor(private route:Router){

  }
  onDashboard(){
    this.route.navigateByUrl('/dashboard');
  }
}
