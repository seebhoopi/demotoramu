import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod,Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ModelChoice} from 'models/modelchoice';
import {UserModel} from 'models/usermodel';
import {StorageService} from '../common/storage.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class HomeService{
  
  
 ModelChoice=[];
  _friends:Observable<any> = null;
data;
  constructor(private _http:Http,private storageService:StorageService){
  }
 
  clearCache(){
    this._friends = null;
  }
  
  getJson(){
       return this._http.get('http://localhost:9001/api/getUploadJson');
    
  }

  getMultiChoice(){



 return this._http.get('assets/uploads/modulechoice.json')
  .map((res: Response)=>{res.json() 
                    
                    return res.json();
           });

               

  }

  private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
      }
      

      public storeObjectinLocalStorage(userObject):boolean
      {
          // this.storageService.setUserObject(JSON.stringify(userObject));
          console.log("JSON.stringify(userObject)  ---"+JSON.stringify({userObject}));
         // console.log("JSON.stringify(JSON.parse(userObject))  ---"+JSON.stringify(JSON.parse(userObject)));
           this.storageService.setUserObject(JSON.stringify(userObject));
          return true;
      }

      public clearLocalStorage()
      {
        this.storageService.removeAll();
      }

      public getAllLocalStorageValues():UserModel[]
      {

        let objectArray =this.storageService.getAll();
        return objectArray;



    
      }



     

       postJson(data:any) {
               let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //this.trackingValues.push(data);
      let url = 'http://localhost:9001/api/uploadjson';
    //let jsonstring  = JSON.stringify("'name':'bhoopathi','age':'16','m':'m'");
    //return this._http.post(url,'{"name":"davy jones" , "email":"davy@gmail.com"}',{headers:headers}).map((res: Response) => {res.json()
     return this._http.post(url,data,{headers:headers}).map((res: Response) => {res.json()
     console.log("Respose" +res.json);
     let placeOrder=res.json();
         if(placeOrder.statusCode==200){
             console.log("Placed");
                 return placeOrder.message; 
            }
        })
        .catch(this.handleError);  
  }

}
