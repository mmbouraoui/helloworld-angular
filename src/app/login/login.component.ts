import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private httpClient: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(currentUser)            
        console.log("this is login component");
        if (currentUser && currentUser.token) {
            this.router.navigate(['home']);
        }else{
            this.authenticationService.logout();
            console.log("test");
            // get return url from route parameters or default to '/'
            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        }
        
    }

    login() {
        this.loading = true;

        this.authenticationService.login(this.model.username, this.model.password).subscribe(
                data => {
                    this.router.navigate(['home']);
                   this.alertService.error('Welcome User');
                },
                error => {
                    if(error.status == 401){
                        this.alertService.error('Wrong login/password ');
                    }else{
                       this.alertService.error(error.message);
                    }
                    this.loading = false;
                });
                


}
}