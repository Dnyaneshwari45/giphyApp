import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {GifDataService} from '../gif-data.service';


@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent implements OnInit,OnDestroy {

  gifs: any[]=[];
subscription: Subscription;
  constructor(private dataService: GifDataService) { }
ngOnDestroy(){
this.subscription.unsubscribe();
}
  ngOnInit(): void {
    this.dataService.getTrendingGifs();
   this.subscription= this.dataService.getGifs().subscribe((response: any)=>{
      this.gifs= response;
    });
  }
}


