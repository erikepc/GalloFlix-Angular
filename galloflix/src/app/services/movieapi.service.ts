import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'
      
    }
  };

}
