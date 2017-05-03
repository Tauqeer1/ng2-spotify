import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';

import { Artist } from './../../models/artist.model';
import { Album } from './../../models/album.model';

@Component({
    selector: 'artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

    id: string;
    artist: Artist[];
    album: Album[];
    constructor(private _spotifyService: SpotifyService, private _route: ActivatedRoute) {
        
    }

    ngOnInit() {
        this._route.params
        .map(params => {
            return params['id'];
        })
        .subscribe(id => {
            this._spotifyService.getArtist(id)
                .subscribe(artist => {
                    this.artist = artist;
                })
            
        });
    }
}