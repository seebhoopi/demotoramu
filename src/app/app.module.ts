import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/Search.Component';
import { SearchService } from './search/Search.Service';
import { HomeComponent } from './Home/Home.component';
import { HomeService } from './Home/Home.Service';
import { routing }        from './app.routing';
import {StorageService} from './common/storage.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
    providers: [
        StorageService,
        HomeService,
        SearchService

      
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
