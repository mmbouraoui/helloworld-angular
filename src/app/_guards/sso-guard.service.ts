import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlertService, AuthenticationService } from '../_services/index';
//import { AuthenticationService } from '@auth/services/authentication.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SSOGuardService implements CanActivate {
  model: any = {};
  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    console.log("START ");
    // recuperation du token OLIS de 
    //l'url 
    console.log(route.queryParams);
    console.log(route.params['OLIS.AUTHENTICATE']);
    console.log(route.paramMap['OLIS.AUTHENTICATE']);
   
    const olisAuthenticate =route.queryParams["OLIS.AUTHENTICATE"];
      
      console.log("olisAuthenticate ");
    console.log("olisAuthenticate " + olisAuthenticate );
    return Observable.create((observer) => {
      // si le token est existant
      // on procedera à un appel service 
      // pour recuperer l'acces token 
      if (olisAuthenticate) {
        console.log("try ");
        let headers = new HttpHeaders({
          "Content-Type": "application/json","Authorization" : 'Bearer eyJnZW5lcmF0ZWQgYXQiOiJNb24gSnVsIDE2IDEwOjU1OjUyIENFU1QgMjAxOCIsImFsZyI6IlJTNTEyIn0.eyJpc3MiOiJQYWxteXJhIiwiYXVkIjoiUGFsbXlyYSIsInN1YiI6Im1ib3VyYW91aSIsImlhdCI6MTUzMTczMTM1MiwiZXhwIjoxNTMxNzMyMjUyLCJuYmYiOjE1MzE3MzEzNTIsImp0aSI6IjFhZmUzNGUxLTIwMjgtNDc4Ny1hZGExLTMwMTljY2M2MGM1MSIsImFnYWNDb250ZXh0OnNpZ25hdHVyZSI6IjMwMmMwMjE0NWE2MmY2ODFlODdkOGU1NDE3MDNhNmI4ZTE2MDgwNGMyNjdjMTUyNjAyMTQ0ODZmZTNiMmZhZGQyNTBkOTFiZDU1NjY2ZTY1ZGRlOThjYjQyNzNhIiwiZHRDcmVhIjoxMTA0NTM0MDAwMDAwLCJsaWJDb250YWN0IjoiQSByZW5zZWlnbmVyIiwiYWdhY0NvbnRleHQ6c2Vzc2lvbklEIjoiRUxsUkpjUVFzUnRqUmR0bHRZWWhKZyoqIiwiY29kZU9yZyI6IjAxMDEiLCJpZFVwcGVyT3JnIjowLCJpZFVwZCI6NTY3MywibWFpbE9yZyI6ImNhY2Vpc19mcmFuY2VAY2FjZWlzLmNvbSIsImFnYWNDb250ZXh0OnVzZXJJRCI6MzExOTcsImlkT3JnIjoxLCJkdFVwZCI6MTUyOTk2NDAwMDAwMCwibGV2ZWxPcmciOiJST09UIiwiYWdhY0NvbnRleHQ6c2VydmVySUQiOiJPTElTLkFVVEhFTlRJQ0FURSIsImNvZFN0YXR1cyI6Ik9LIiwibGliT3JnIjoiQ0FDRUlTIEJBTksiLCJsaWJBZHJlc3NPcmciOiJQQVJJUyIsImNvZGVEZXNpZ24iOiJDQUNFSVMiLCJjbGFzcyI6ImNvbS5jYWNlaXMuc3R3Mi5zZWN1cml0eS5Pcmdhbml6YXRpb24iLCJpZENyZWEiOjAsInRpbWVPdXQiOjYwLCJpZFJvb3RPcmciOjAsInVzZXJSb2xlcyI6WyJCUy5IQVAuQURNSU4iXSwidXNlckNvZGVEZXNpZ24iOiJDQUNFSVMiLCJ0eXBTdWJPcmciOjAsInRvcEV4dGVybmFsIjoiTiIsInVzZXJTdGF0dXMiOiIxMDAwOCIsInR5cGVPcmciOiJJIiwibmJVcGQiOjIwOX0.B-v23FNP_ZKXL1y70kdLc84u3l7vdzFr-DLvSaxGC2M4a7ty3DoV5AvC3cxZXdfy5vnQctwcm1NoNUt396xpwghPv77mERKLf0KDY1kPTT9DPzX_FFy9nM-PYi_AxpvMzoTTJZpQqdUMoDr0bKOEIS3jQ4quzVlw4YAEtBgI_uM'
          });
         
          console.log("authenticate1");
          return this.http.post<any>('/services/rest/tokenProvider/getToken', olisAuthenticate, {
            headers
          })
            .map(user => { 
              console.log("AUTH OK ");
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
    
                return user;
            });

       
      } else {
        console.log("false observer");
        observer.next(false);
        observer.complete();
        
      }
    });
  }
}
