import { Component } from '@angular/core';
import { AuthenticationService, AlertService } from './_services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }


    logout(){
      this.authenticationService.logout();
      this.router.navigate(['']);
      this.alertService.success('You have been logged out successfully');
    }

    isLogged(){
      return this.authenticationService.isLoggedIn();
    }
}
