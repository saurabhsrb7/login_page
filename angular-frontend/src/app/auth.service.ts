import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  register(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  login(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, user);
  }
}
