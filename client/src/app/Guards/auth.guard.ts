import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JobService } from '../Service/job.service';

@Injectable({
  providedIn: 'root',
})
class PermissionService {
  constructor(private route: Router, private auth: JobService) {}

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.route.navigateByUrl('/l');
    return false;
  }
  
}
export const authGuard: CanActivateFn = () => {
  return inject(PermissionService).canActivate();
};
