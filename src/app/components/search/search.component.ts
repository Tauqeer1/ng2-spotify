import  { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../models/artist.model';
@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {

    searchStr: string;
    searchResults: Artist[];
    constructor(private _spotifyService: SpotifyService) {

    }

    searchMusic() {
        this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchResults = res.artists.items;
            });
    }

}