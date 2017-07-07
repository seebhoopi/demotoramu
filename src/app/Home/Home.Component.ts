import { Component ,OnInit, OnDestroy,HostListener} from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod,Request } from '@angular/http';
import {HomeService} from './Home.Service';

import { ModelChoice } from "models/modelchoice";
import { UserModel } from "models/usermodel";
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './Home.component.html'
})
export class HomeComponent implements OnInit {
  plscome: any;
  title = 'app works!';
        username='' ;
        model: any = {};
        display = {first:true, second:true};
        friends = [];
        subscription;
        selectedValue;
        modelChoice : ModelChoice[];
        resultList =[];
        userModel:UserModel;
        retrieveValues;
        selectedDeviceObj;
        values:any;
    appCache = window.applicationCache;
        
        constructor(private http: Http,private homeService:HomeService) { 
         //  window.applicationCache.addEventListener('updateready', this.onUpdateReady);
          // window.applicationCache.addEventListener('error', this.onError);
        }

onUpdateReady() {
  
  window.applicationCache.swapCache();
  alert('onUpdateReady found new version!');
}

onError() {

  if (navigator.onLine == true) { //If the user is connected to the internet.
                    alert("Error - Please contact the website administrator if this problem consists.");
                } else {

                  //syncup code
                    alert("You aren't connected to the internet. Some things might not be available.");
                }

  alert(' onErrorfound new version!');
}

      clearAll()
      {
        
        this.homeService.clearLocalStorage();
        this.retrieveValues=[];
        
      }
      onSubmit()
      {

            let x: UserModel = {
              name:this.username,
              userModelChoice: this.selectedDeviceObj
            }

          this.homeService.storeObjectinLocalStorage(x);
                  
          this.username="";
      }

      onRetrieve()
      {


         this.retrieveValues =this.homeService.getAllLocalStorageValues();
         this.plscome = this.retrieveValues;
          
        
      }
  PostCheck()
  {
        console.log(JSON.stringify(this.retrieveValues));
        this.homeService.postJson(this.retrieveValues).subscribe(
                data => {
                    console.log("success");
                    this.homeService.clearLocalStorage();
                    return false;
                }
                ,
                err => {console.log("fails");
                this.homeService.clearLocalStorage();
                 return false;
            }
            
            );

      // this.retrieveValues =this.homeService.postJson(this.retrieveValues);
  }
      onChangeObj(newObj) {
        
        this.selectedDeviceObj = newObj;

        this.resultList = newObj.resultList;
        
      }
    loadData(){
    


        this.homeService.getJson()
                .subscribe(
                    data => {
                      
                      this.model = data.text()
                      
                    },
                    error => {
                      console.log(error);
                    });


            this.homeService.getMultiChoice()
                        .subscribe(
                            data => {
                              this.modelChoice=data as ModelChoice[];
                              this.selectedDeviceObj = this.modelChoice[0];
                              
                              
                            },
                            error => {
                              console.log(error);
                            });


         

      }

      ngOnInit(){
        this.loadData();
      }
      
      ngOnDestroy(){
      //  this.subscription.unsubscribe();
        
      }





}




