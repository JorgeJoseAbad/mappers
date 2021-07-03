import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(
          private httpClient : HttpClient,
  ) { }

getDogs():Observable<any>{
  return this.httpClient.get<any>("https://dog.ceo/api/breeds/list/all")
}

}
