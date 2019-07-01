import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private cityUrl = '../assets/city.list.json';
  private citySubstring = '';

  constructor(private http: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl).pipe(
      catchError(this.handleError)
    );
  }

  // getProduct(id: number): Observable<IProduct | undefined> {
  //   return this.getProducts().pipe(
  //     map((products: IProduct[]) => products.find(p => p.productId === id))
  //   );
  // }

  getCityByName(name: string): Observable<City[]> {
    this.citySubstring = name.toLowerCase();
    return this.getCities().pipe(
      map((cities: City[]) => cities.filter( c => c.name.toLowerCase().includes(this.citySubstring) ))
    );
  }

  getCityByNameAndCountry(name: string, country: string): Observable<City[]> {
    this.citySubstring = name.toLowerCase();
    return this.getCities().pipe(
      map((cities: City[]) => cities.filter( c => c.name.toLowerCase().includes(this.citySubstring) && c.country.toLocaleLowerCase() === country.toLowerCase() ))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
}
