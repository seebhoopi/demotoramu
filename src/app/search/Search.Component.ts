import { Component, OnInit,Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MyFilterPipe } from './MyFilterPipe';
import{SearchService} from './Search.Service';
import { UserModel } from "models/usermodel";

@Component({
    // moduleId: module.id,
    templateUrl: './Search.Component.html'
})

export class SearchComponent implements OnInit {
    model: any = {};
     retrieveValues:UserModel[]=[];
    loading = false;
    returnUrl: string;
    user_type:string;
    name:string;
    userinfo:any={};
    userChoiceLocalStorageValue : UserModel[]=[];
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private searchService:SearchService
        ) { }

    ngOnInit() {

        this.searchService.getAllLocalStorageValues().subscribe((response) => {
    
});

       this.userChoiceLocalStorageValue = ;
        this.model="Search Page";
    }
    
    performSearch(searchTerm: HTMLInputElement): void {
        this.retrieveValues=[];
     console.log('User entered: '+searchTerm.value); 

     

     
      if (this.userChoiceLocalStorageValue.length>0)
      this.retrieveValues = this.userChoiceLocalStorageValue.filter(
          usermodulechoice => usermodulechoice.name.toLowerCase() === searchTerm.value.toLowerCase());

          if (this.retrieveValues.length==0)
          {
                 this.searchService.getTransactionData()
                        .subscribe(
                            data => {
                                 this.retrieveValues = data.filter(
          usermodulechoice => usermodulechoice.name.toLowerCase() === searchTerm.value.toLowerCase());
                            
                              this.searchService.storeObjectinLocalStorage(this.retrieveValues);
                              
                            },
                            error => {
                              console.log(error);
                            });
          }
                       

      
   
    }
    
   
}


