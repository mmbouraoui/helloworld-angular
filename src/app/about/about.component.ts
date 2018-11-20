import { Component, OnInit } from '@angular/core';
import { DataService,AuthenticationService } from '../_services/index';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  goals : any;
  constructor(private _data : DataService,private authenticationService: AuthenticationService,private router: Router) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
    this.authenticationService.changePassword().subscribe(
      data => {
        localStorage.removeItem('currentUser');
        },
      error => {
          if(error.status == 401){
              this.router.navigate(['']);
          }
      });
      localStorage.removeItem('currentUser');
       
  }

}
