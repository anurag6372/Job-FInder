import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  isLoggedIn() {
    if(localStorage.getItem("role")==="Recruiter" || localStorage.getItem("role")==="Job Seeker"){
      return true;
    }else{
      return false;
    }
  }

  constructor() { }
}
