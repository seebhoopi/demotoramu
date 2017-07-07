import { Injectable, Inject } from '@angular/core';
import { UserModel } from "models/usermodel";
import { Observable } from "rxjs/Observable";

const STORAGE_KEY = 'user_object';


@Injectable()
//setJWTTokenExpiryTime
export class StorageService {
  getUserObject() {
    return localStorage.getItem(STORAGE_KEY);
  }

  setUserObject(token) {
      let s=1;
      if (localStorage.length > 0)
          s = localStorage.length+1
        localStorage.setItem(STORAGE_KEY+s, token);
  }

  removeUserObject() {
    localStorage.removeItem(STORAGE_KEY);
  }


  HasKeys(){
    return localStorage.length > 0;
  }

  removeAll()
  {
    localStorage.clear();
  }
  
  getAll():UserModel[]
  {
       let selectRow=1;
       var order = new Array();
       let pushLocalStorageValue: UserModel[]=[];
          let aa:UserModel ;
          let counter=0;
       if (localStorage.length > 0)
       {

           let totalRows=localStorage.length;
           while(totalRows>0)
           {
               order[counter] = new Array();
                aa = JSON.parse(localStorage.getItem(STORAGE_KEY+selectRow));
                let jsonstring =localStorage.getItem(STORAGE_KEY+selectRow);
              let jsonObj: any = JSON.parse(localStorage.getItem(STORAGE_KEY+selectRow)); // string to generic object first
              let userModel: UserModel = <UserModel>jsonObj;
                
                pushLocalStorageValue.push(userModel);
               order[counter].push(aa);
                selectRow++;
                totalRows--;
                counter++;
           }
           
       }
    //    return JSON.stringify(pushLocalStorageValue);
    //return order;
    // let resultUserModel: Observable<UserModel[]>;
    // resultUserModel = JSON.parse(order.toString()).json() ;
    // return resultUserModel;
    return pushLocalStorageValue;
    
  }
 getAllTest():UserModel[]
  {
       let selectRow=1;
       var order = new Array();
       let pushLocalStorageValue: UserModel[];
          let aa:UserModel ;
          let counter=0;
       if (localStorage.length > 0)
       {

           let totalRows=localStorage.length;
           while(totalRows>0)
           {
               order[counter] = new Array();
                aa = JSON.parse(localStorage.getItem(STORAGE_KEY+selectRow));
               order[counter].push(aa);
                selectRow++;
                totalRows--;
                counter++;
           }
           
       }
    //    return JSON.stringify(pushLocalStorageValue);
    return <UserModel[]>order;
  }
}
