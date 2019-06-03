import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CarrosModule } from '../app/models/carros';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

@Injectable({
  providedIn: 'root'
})

export class ApiService {

apiUrl = 'http://localhost:3000/carros';

  constructor(private _http: HttpClient) { }

getCarros(){
  return this._http.get<CarrosModule[]>(this.apiUrl);
}
}

