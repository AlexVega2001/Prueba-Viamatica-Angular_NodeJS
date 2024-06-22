import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl: string = 'http://localhost:5002/api/v1';

  constructor( private http: HttpClient ) { }

  LoguearUsuario(username_email: string, password: string): Observable<Login> {
    const url = `${this.apiUrl}/login-user`;

    // Crear los parámetros de la solicitud
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { u_username_mail: username_email, u_password: password };

    // Enviar la solicitud POST con los parámetros
    return this.http.post<Login>(url, body, { headers }).pipe(
      map((response: Login) => {
        if (response.success) {
          localStorage.setItem('session_id', JSON.stringify(response.session_id));
          localStorage.setItem('user_id', JSON.stringify(response.user_id));
        }
        return response;
      })
    );
  }
}
