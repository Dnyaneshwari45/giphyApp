import {Injectable} from '@angular/core';


import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class GifDataService {
gifs = new BehaviorSubject<any>([]);
  constructor(private http : HttpClient) {}

  getTrendingGifs() {
    const url =
     "https://api.giphy.com/v1/gifs/trending?api_key=tQXIijxkcLVp5aVeHiSDiHVgiieY2SYr"

    return this.http.get(url).subscribe((response: any)=>{
this.gifs.next(response.data);
    });

  }

  searchGif(gifName : string) {

    const url = `https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=tQXIijxkcLVp5aVeHiSDiHVgiieY2SYr`
    return this.http.get(url).subscribe((response: any)=>{
      this.gifs.next(response.data);
          });
  }

  getGifs(){
    return this.gifs.asObservable();
  }
}
