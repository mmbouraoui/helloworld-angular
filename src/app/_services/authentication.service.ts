import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams, HttpParameterCodec} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }


    agacLogin(context: string) {
      let headers = new HttpHeaders({
      "Content-Type": "application/json","Authorization" : 'Bearer eyJnZW5lcmF0ZWQgYXQiOiJNb24gSnVsIDE2IDEwOjU1OjUyIENFU1QgMjAxOCIsImFsZyI6IlJTNTEyIn0.eyJpc3MiOiJQYWxteXJhIiwiYXVkIjoiUGFsbXlyYSIsInN1YiI6Im1ib3VyYW91aSIsImlhdCI6MTUzMTczMTM1MiwiZXhwIjoxNTMxNzMyMjUyLCJuYmYiOjE1MzE3MzEzNTIsImp0aSI6IjFhZmUzNGUxLTIwMjgtNDc4Ny1hZGExLTMwMTljY2M2MGM1MSIsImFnYWNDb250ZXh0OnNpZ25hdHVyZSI6IjMwMmMwMjE0NWE2MmY2ODFlODdkOGU1NDE3MDNhNmI4ZTE2MDgwNGMyNjdjMTUyNjAyMTQ0ODZmZTNiMmZhZGQyNTBkOTFiZDU1NjY2ZTY1ZGRlOThjYjQyNzNhIiwiZHRDcmVhIjoxMTA0NTM0MDAwMDAwLCJsaWJDb250YWN0IjoiQSByZW5zZWlnbmVyIiwiYWdhY0NvbnRleHQ6c2Vzc2lvbklEIjoiRUxsUkpjUVFzUnRqUmR0bHRZWWhKZyoqIiwiY29kZU9yZyI6IjAxMDEiLCJpZFVwcGVyT3JnIjowLCJpZFVwZCI6NTY3MywibWFpbE9yZyI6ImNhY2Vpc19mcmFuY2VAY2FjZWlzLmNvbSIsImFnYWNDb250ZXh0OnVzZXJJRCI6MzExOTcsImlkT3JnIjoxLCJkdFVwZCI6MTUyOTk2NDAwMDAwMCwibGV2ZWxPcmciOiJST09UIiwiYWdhY0NvbnRleHQ6c2VydmVySUQiOiJPTElTLkFVVEhFTlRJQ0FURSIsImNvZFN0YXR1cyI6Ik9LIiwibGliT3JnIjoiQ0FDRUlTIEJBTksiLCJsaWJBZHJlc3NPcmciOiJQQVJJUyIsImNvZGVEZXNpZ24iOiJDQUNFSVMiLCJjbGFzcyI6ImNvbS5jYWNlaXMuc3R3Mi5zZWN1cml0eS5Pcmdhbml6YXRpb24iLCJpZENyZWEiOjAsInRpbWVPdXQiOjYwLCJpZFJvb3RPcmciOjAsInVzZXJSb2xlcyI6WyJCUy5IQVAuQURNSU4iXSwidXNlckNvZGVEZXNpZ24iOiJDQUNFSVMiLCJ0eXBTdWJPcmciOjAsInRvcEV4dGVybmFsIjoiTiIsInVzZXJTdGF0dXMiOiIxMDAwOCIsInR5cGVPcmciOiJJIiwibmJVcGQiOjIwOX0.B-v23FNP_ZKXL1y70kdLc84u3l7vdzFr-DLvSaxGC2M4a7ty3DoV5AvC3cxZXdfy5vnQctwcm1NoNUt396xpwghPv77mERKLf0KDY1kPTT9DPzX_FFy9nM-PYi_AxpvMzoTTJZpQqdUMoDr0bKOEIS3jQ4quzVlw4YAEtBgI_uM'
      });
      let body = context;
      console.log("authenticate");
      return this.http.post<any>('/services/rest/tokenProvider/getToken', body.toString(), {
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
      }



    login(username: string, password: string) {

      let headers = new HttpHeaders({
        "Content-Type": "application/json"
        });
        
        console.log("authenticate");
        return this.http.post<any>('http://fwpc-86668.hld.net:9084/test126284/services/rest/tokenProvider/getToken', "302d021500876b09edf487a44a2a2798fc90639eb4c87a764502141021b1c4a6caffe1184207989987394b7d640091##OLIS.AUTHENTICATE##1pRfSszyIqzselhCfZwSHg**##31197", {
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





    //   var ca = document.cookie.split(';'); 
    //   console.log("cookie");
    //   console.log(ca);
    //   let headers = new HttpHeaders({
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   });
    //   let body = new HttpParams({encoder: new CustomEncoder()})
    //     .set("username", username)
    //     .set("password", password);
    // return this.http.post<any>('http://fwpc-86668.hld.net:9082/126322/services/rest/security/authenticate', body.toString(), {
    //     headers
    //   })
    //     .map(user => { 
    //       console.log("AUTH OK ");
    //         // login successful if there's a jwt token in the response
    //         if (user && user.token) {
    //             // store user details and jwt token in local storage to keep user logged in between page refreshes
    //             localStorage.setItem('currentUser', JSON.stringify(user));
    //         }

    //         return user;
    //     });







        // let headers = new HttpHeaders({
        //     "Content-Type": "application/x-www-form-urlencoded","Authorization" : "Basic bWJvdXJhb3VpOk1zISEyNjEwMjAxNg=="
        //   });
        //   let body = new HttpParams({encoder: new CustomEncoder()})
        //     .set("username", username)
        //     .set("password", password);


        // return this.http.get('https://fwpc-86668.hld.net:9445/126311/services/rest/loginDetailses?userName=mbouraoui', {
        //     headers
        //   })
          
        // .map(user => { 
        //         // login successful if there's a jwt token in the response
        //       if (user) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     });

    //    return this.http.post<any>('/services/rest/security/authenticate', body.toString(), {
      //      headers
        //  })
          
        //.map(user => { 
                // login successful if there's a jwt token in the response
          //      if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
            //        localStorage.setItem('currentUser', JSON.stringify(user));
              //  }

                //return user;
           // });
    }

    logout() {
      let headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(currentUser!=null){
        let body = new HttpParams({encoder: new CustomEncoder()})
        .set("accessToken", currentUser.token);      
        return this.http.post<any>('/services/rest/security/logout', body.toString(), {
          headers
        }).map(user => { 
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
      });;
      }
   
    }



    changePassword(){
      let headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let body = new HttpParams({encoder: new CustomEncoder()})
      .set("username","testapi")
      .set("oldPassword","your_old_pwd")
      .set("newPassword","your_new_pwd")
      return this.http.post<any>('/services/rest/security/updatePassword', body.toString(), {
        headers
      })
        .map(user => { 
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
    }


    refesh(){
      let headers = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let body = new HttpParams({encoder: new CustomEncoder()})
      .set("refreshToken", currentUser.refreshToken);      
      return this.http.post<any>('/services/rest/security/refreshToken', body.toString(), {
        headers
      })
        .map(user => { 
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
        });
    }

    isLoggedIn(){
      if (localStorage.getItem('currentUser')) {
        return true;
      }else{
        return false;
      }
    }
}
//WorkAround for Encoding issue when sending data to the backEnd that contains special characters
//For example invoking the auth service with user/password that contains '+' character
//common/http: HttpParams encoding of form data : https://github.com/angular/angular/issues/18261
class CustomEncoder implements HttpParameterCodec {
    encodeKey(key: string): string {
      return encodeURIComponent(key);
    }
  
    encodeValue(value: string): string {
      return encodeURIComponent(value);
    }
  
    decodeKey(key: string): string {
      return decodeURIComponent(key);
    }
  
    decodeValue(value: string): string {
      return decodeURIComponent(value);
    }
  }