import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Landing } from '../../models/landing';


@Injectable({
  providedIn: 'root'
})
export class LandingService {
  public url: string;
  public headers: HttpHeaders;
 

  constructor(private http: HttpClient, private sessionService: SessionService) {
    this.url = environment.url;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      
    });
  }

  
  validarRenaper(data: { dni: any; sexo: any; }) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<any>(`http://egov2.neuquen.gov.ar/renaper_unco/ServletDatos?usuario=mpf-sistema&pass=xvct1184&documento=${data.dni}&sexo=${data.sexo}`, {
      headers: this.headers
    });
  }

  validateClubService(data: { cardNumber: any; dni: any; }) {
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(`https://autogestion.rionegro.com.ar/api/validateCardClub?dni=${data.dni}&cardNumber=${data.cardNumber}`, {
      headers: this.headers
    });
  }


  getProvincias() {
    return this.http.get<any>(`https://apis.datos.gob.ar/georef/api/provincias`);
  }

  getLocalidades(id: any) {
    return this.http.get<any>(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${id}&max=666`);
  }

  getProvincia(id: any) {
    return this.http.get<any>(`https://apis.datos.gob.ar/georef/api/provincias?id=${id}`);
  }
}
