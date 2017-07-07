import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod,Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ModelChoice} from 'models/modelchoice';
import {UserModel} from 'models/usermodel';
import {StorageService} from '../common/storage.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class SearchService{
  
  
 ModelChoice=[];
  
data;
  constructor(private _http:Http,private storageService:StorageService){
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
          this.storageService.setUserObject(JSON.stringify(userObject));
          return true;
      }

     

      public getAllLocalStorageValues():UserModel[]
      {

        let objectArray =this.storageService.getAll();
        return objectArray;



    
      }
public getAllLocalStorageValuesTest():UserModel[]
      {
        let objectArray =this.storageService.getAllTest();
        return objectArray;
      }

 getTransactionData():Observable<UserModel[]>{



 return this._http.get('assets/uploads/transaction.json')
  .map((res: Response)=>{res.json() 
                    
                    return res.json() as UserModel[];
           });

               

  }     

       postJson(data:any) {
               let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = 'http://localhost:9001/api/uploadjson';
    
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
