import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private readonly API = 'api/pessoas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Person[]>(this.API)
    .pipe(

      first(),
      tap(person => console.log(person))

    );
  }
}
