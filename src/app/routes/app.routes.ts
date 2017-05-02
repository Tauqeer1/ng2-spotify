import { Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { SearchComponent } from '../components/search/search.component';


export const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent }
]