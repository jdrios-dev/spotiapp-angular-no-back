import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent  {

  @Input() items: any[] = [];

  constructor( private router: Router ) { }

  showArtist(item: any){
    let artistId;

    if ( item.type === 'artist' ) {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId])
  }

}
