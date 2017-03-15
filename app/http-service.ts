import {Injectable} from '@angular/core';
import {  Headers,Http,RequestOptions,Response  } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  
    //usersUrl:string='';
   // usersUrl:string='http://localhost:8080/registeredUsers';
    //usersUrl:string='http://192.168.2.131:8082/CustomerValid?Emailid=teja@gmail.com
  // usersUrl:string='http://192.168.2.131:8081/Customer/Register';
  usersUrl:string='http://desktop-fkqp4pv:8081/Customer/Register';

    private headers = new Headers({'Content-Type': 'application/json'});


  constructor(public http:Http) {}
  
   public registeredUsersDetails(): Observable<any> {
    return this.http.get(this.usersUrl)
      .map((responseData) => {
        return responseData.json();
                });
  }
  //  search(terms: Observable<string>) {
  //    return terms.map(term => this.emailValidCheck(term))
  //           .debounceTime(5000)
  //           .distinctUntilChanged();
  //   // return terms.debounceTime(5000)
  //   //             .distinctUntilChanged()
  //   //             .switchMap(term => this.emailValidCheck(term));
  // }
  createUser (  firstName: string,
                lastName:string,
                emailId:any,
                mobileNo:any,
                password:any,
                businessName:any,
                typeOfBusiness:any,
                website:any,
                businessAddress:any,
                imageData:any
              ): Observable<any> {
     return this.http.post(this.usersUrl, JSON.stringify({

                                "custFname": firstName,
                                "custLname": lastName,
                                "custEmailId": emailId,
                                "custMobNo": mobileNo,
                                "custPwd": password,
                                "custBussName": businessName,
                                "custBussType": typeOfBusiness,
                                "custBussWebSite": website,
                                "custBussLogo": imageData,
                                "custBussAddr": businessAddress,
                                "custActive": "N"
                                                             
                          }), new RequestOptions({ headers: this.headers })); 
                         //.map(this.extractData); 
                         
    }
     private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
   emailValidCheck(emailId:any): Observable<any>{
    
      return this.http.get(emailId);
   }

   loginValidation(login:any): Observable<any>{
    
      return this.http.get(login);
   }   
}

