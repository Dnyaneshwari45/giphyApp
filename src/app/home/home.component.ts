import { Component, OnInit } from '@angular/core';

import {GifDataService} from '../gif-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: GifDataService ) { }

  ngOnInit(): void {
  }

  onSearch(searchGif){
if(searchGif !== ''){
  this.dataService.searchGif(searchGif);
}
  }

}
