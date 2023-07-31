import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rlogin',
  templateUrl: './rlogin.component.html',
  styleUrls: ['./rlogin.component.css']
})
export class RloginComponent {
    constructor(private title: Title){
      this.title.setTitle('Home');
    }
}
