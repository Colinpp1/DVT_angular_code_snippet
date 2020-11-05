import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/302127/playlists');
  }

  getTrackList(tracklistloc): Observable<any> {
    return this.http.get<any>(tracklistloc);
  }
}
