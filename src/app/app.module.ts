import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//Routes
import { appRoutes } from './routes/app.routes';

//Services
import { SpotifyService } from './services/spotify.service';

//Components
import { AppComponent } from './app.component';
import {
  NavbarComponent, 
  AboutComponent,
  SearchComponent,
  ArtistComponent,
  AlbumComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ SpotifyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
