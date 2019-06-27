import { Injectable,EventEmitter ,Output  } from '@angular/core';
import {  of, throwError , Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap , filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx'
import { Car } from 'Server/Model/nCar';
import { NewCarComponent } from './reporte/new-car/new-car.component';
import { map } from 'rxjs/operators';

const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

@Injectable({
  providedIn: 'root'
})

export class ApiService {
apiUrl = 'http://localhost:3000/carros';
constructor(private _http: HttpClient) { }

private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};


getCar() {
  return this._http.get(this.apiUrl);
}

postCar(xCar){
  return this._http.post(this.apiUrl,xCar.value)
  .pipe(map((response: Response) => response.json()));
}
removeCar(cAS){
  console.log(cAS);
  return this._http.delete(this.apiUrl,cAS);
}

}
