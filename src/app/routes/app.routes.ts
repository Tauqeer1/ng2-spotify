import { Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { SearchComponent } from '../components/search/search.component';
import { ArtistComponent } from '../components/artist/artist.component';


export const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent }
]