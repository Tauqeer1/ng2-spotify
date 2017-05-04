import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';


@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

    id: string;
    album: Album;
    constructor(private _route: ActivatedRoute, private _spotifyService: SpotifyService) {

    }
    ngOnInit() {
        this._route.params
        .map(params => {
            return params['id'];
        })
        .subscribe(id => {
            console.log('id', id);
            this._spotifyService.getAlbum(id)
                .subscribe(album => {
                    console.log('album', album);
                    this.album = album;
                });
        });
    }
}