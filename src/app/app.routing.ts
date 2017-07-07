import { Routes, RouterModule } from '@angular/router';


import { SearchComponent } from './search/Search.Component';
import { HomeComponent } from './Home/Home.component';




const appRoutes: Routes = [
     
     { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
     

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);