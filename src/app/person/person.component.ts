import { Component, OnInit } from '@angular/core';
import { PersonService } from '../_services/index';
import { Person, Adress, PossibleValue} from '../_models/index';
import { Observable } from 'rxjs/Observable';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  loading = false;
  persons : Observable<Person>;

  constructor(
    private personService: PersonService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    console.log("test find");

    // this.authenticationService.agacLogin("302c02147afd08fc09247f3195890295468ea2380c80e41f021457101446f0b01b67a6cab0cfe2b9a8a346addf62##OLIS.AUTHENTICATE##jG6BqBWay7ua2fgALwiqiw**##31197")
    // .subscribe(
    //     data => {
          
    //     },
    //     error => {
            
    //         this.loading = false;
    //     });

    this.persons = this.personService.find('',null,null,1,2);
  }

}
