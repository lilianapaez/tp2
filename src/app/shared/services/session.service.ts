import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public url: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.url = environment.url;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  

  
}
