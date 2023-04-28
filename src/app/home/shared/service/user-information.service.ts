import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInformation } from '../model/user-information.model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  api: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUserInformation(): Observable<UserInformation[]> {
    return this.http.get<UserInformation[]>(this.api);
  }
}
