import {Injectable} from '@angular/core';
import { Headers,Http,RequestOptions,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// import {Injectable} from '@angular/core';
// import {Http} from '@angular/http';
// import {Observable} from 'rxjs/Observable';
@Injectable()
export class HttpService {
domainname:string="test.domain.name";

  url:string='http://localhost:8080/masterConfig';
url1:string='http://localhost:8080/pagesData';


// planUrl:string='http://localhost:8080/details';
// planUrl:string='http://localhost:8080/planDetails';
planUrl:string='http://localhost:8082/PLAN_DESIGN/GET_ALL_PLANS?Key=VIEW&PartyId=1001';
  
 //usersUrl:string=''; sravanthi desktop - DESKTOP-FKQP4PV:8081
    //usersUrl:string='http://localhost:8080/registeredUsers';
    //http://192.168.2.131:8082/CustomerValid?Emailid=teja@gmail.com
  //usersUrl:string='http://desktop-fkqp4pv:8081/Customer/Register';
  //usersUrl:string='http://192.168.2.131:8081/Customer/Register';
    // private headers1 = new Headers({'userid': 'lakshman'});

  // usersUrl:string='http://DESKTOP-FKQP4PV:8081/Customer/Register';
  usersUrl:string='http://localhost:8081/Customer/Register';

  constructor(public http:Http) {}
  
   public registeredUsersDetails(): Observable<any> {
    return this.http.get(this.usersUrl)
      .map((responseData) => {
        return responseData.json();
                });
  }

   public getMasterConfig(): Observable<any> {
    return this.http.get(this.url)
      .map((responseData) => {
        return responseData.json();
      });
  }

  public getplanDetails(): Observable<any> {
    // return this.http.get('app/data.json')
    return this.http.get(this.planUrl)
      .map((responseData) => {
        return responseData.json();
      });
  } 
   public getData(): Observable<any> {
    return this.http.get(this.url1)
      .map((responseData) => {
        return responseData.json();
      });
  }
 
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
                let headers = new Headers({'Content-Type': 'application/json'});
     return this.http.post(this.usersUrl, JSON.stringify({

                                                                                
                                              "custFname": firstName,
                                              "custLname": lastName,
                                              "custEmailId": emailId,
                                              "custMobNo": mobileNo,
                                              "custPwd": password,
                                              "custBussName":businessName,
                                              "custBussType": typeOfBusiness,
                                              "custBussWebSite": website ,
                                              "custBussLogo": imageData,
                                              "custBussAddr": businessAddress,   
                                              "custBussCity": "Hyderabad",
                                              "custBussState": "Telangana",
                                              "custBussPostalCode": "500072",
                                              "custBussCountry": "INDIA",
                                              "custBussUrl":" "
                                     
                          }), new RequestOptions({ headers: headers })); 
                         //.map(this.extractData); 
                         
    }

    createUserSubscrTrial(): Observable<any> {

        let headers = new Headers({'Content-Type': 'application/json','sessionId': sessionStorage.getItem('sessionId')});
        // let CreateUserSubscrUrl = 'http://triserver:8082/PLAN_DESIGN/CREATE_USER_SUBSCR';
        let CreateUserSubscrTrialUrl = 'http://localhost:8082/PLAN_DESIGN/CREATE_USER_SUBSCR';
        let sessionData = sessionStorage.getItem('admindetails');
        let partyId = JSON.parse(sessionData).adminPartyId;

        let dateValidFrom = new Date();
        let ddValidFrom = dateValidFrom.getDate();
        let mmValidFrom = dateValidFrom.getMonth() + 1;
        let yValidFrom = dateValidFrom.getFullYear();
        let FormattedDateValidFrom = ddValidFrom + '/'+ mmValidFrom + '/'+ yValidFrom;

        let numberOfDaysToAdd = 30;
        let dateValidTill = new Date();
        dateValidTill.setDate(dateValidTill.getDate() + numberOfDaysToAdd);
        let ddValidTill = dateValidTill.getDate();
        let mmValidTill = dateValidTill.getMonth() + 1;
        let yValidTill = dateValidTill.getFullYear();
        let FormattedDateValidTill = ddValidTill + '/'+ mmValidTill + '/'+ yValidTill;

        return this.http.post(CreateUserSubscrTrialUrl, JSON.stringify({
                                              
                                                    "name":"createUserSubscr",
                                                    "details":[
                                                      {
                                                          "subscrId":partyId.toString(),
                                                          "planNo":"PLAN4",
                                                          "planName":"TRIAL",
                                                          "subplanno":"SUBPLAN4",
                                                          "subplanName":"TRIAL_VERSION",
                                                          // "validFrom":"13-3-2017",
                                                          // "validtill":"13-4-2017",                                                          
                                                          "validFrom":FormattedDateValidFrom.toString(),
                                                          "validtill":FormattedDateValidTill.toString(),
                                                          "paymentMode":"FREE",
                                                          "paymentAmount":"0.00",
                                                          "termsandConditions":"1",
                                                          "subscrActive":"A",
                                                          "subscrExt1":" ",
                                                          "subscrExt2":" ",
                                                          "subscrExt3":" "
                                                      }
                                                    ]}
                                              ), new RequestOptions({ headers: headers })); 

    }

    createUserSubscrPaid(planNo:string,planName:string,subplanName:string): Observable<any> {

        let headers = new Headers({'Content-Type': 'application/json','sessionId': sessionStorage.getItem('sessionId')});
        // let CreateUserSubscrUrl = 'http://triserver:8082/PLAN_DESIGN/CREATE_USER_SUBSCR';
        let CreateUserSubscrPaidUrl = 'http://localhost:8082/PLAN_DESIGN/CREATE_USER_SUBSCR';
        let sessionData = sessionStorage.getItem('admindetails');
        let partyId = JSON.parse(sessionData).adminPartyId;

        let dateValidFrom = new Date();
        let ddValidFrom = dateValidFrom.getDate();
        let mmValidFrom = dateValidFrom.getMonth() + 1;
        let yValidFrom = dateValidFrom.getFullYear();
        let FormattedDateValidFrom = ddValidFrom + '/'+ mmValidFrom + '/'+ yValidFrom;

        let subPlanName = subplanName.charAt(0);
        let FormattedDateValidTill:any;
        if(subPlanName != "U"){
          let numberOfDaysToAdd = parseInt(subPlanName) * 30;
          let dateValidTill = new Date();
          dateValidTill.setDate(dateValidTill.getDate() + numberOfDaysToAdd);
          let ddValidTill = dateValidTill.getDate();
          let mmValidTill = dateValidTill.getMonth() + 1;
          let yValidTill = dateValidTill.getFullYear();
          FormattedDateValidTill = ddValidTill + '/'+ mmValidTill + '/'+ yValidTill;
        }else{
          FormattedDateValidTill = "UN_LIMITED";
        }
        

        return this.http.post(CreateUserSubscrPaidUrl, JSON.stringify({
                                              
                                                    "name":"createUserSubscr",
                                                    "details":[
                                                      {
                                                          "subscrId":partyId.toString(),
                                                          "planNo":planNo.toString(),
                                                          "planName":planName.toString(),
                                                          "subplanno":"SUBPLAN4",
                                                          "subplanName":subplanName.toString(),
                                                          "validFrom":FormattedDateValidFrom.toString(),
                                                          "validtill":FormattedDateValidTill.toString(),
                                                          "paymentMode":"CREDIT",
                                                          "paymentAmount":"0.00",
                                                          "termsandConditions":"1",
                                                          "subscrActive":"A",
                                                          "subscrExt1":" ",
                                                          "subscrExt2":" ",
                                                          "subscrExt3":" "
                                                      }
                                                    ]}
                                              ), new RequestOptions({ headers: headers })); 

    }
                          
     private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
   emailValidCheck(emailId:any): Observable<any>{
    
      return this.http.get(emailId);
   }
   loginValidation(login:any): Observable<any>{
    let headers = new Headers();
    let sessionId = sessionStorage.getItem('sessionId');
    headers.append('SessionId',sessionId); 
      return this.http.get(login,{ headers: headers });
   }  
   planChecking(planCheckUrl:any): Observable<any>{
     return this.http.get(planCheckUrl);
   } 
}

