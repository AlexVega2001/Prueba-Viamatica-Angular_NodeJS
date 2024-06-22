import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MessageResp, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl: string = 'http://localhost:5002/api/v1';
  public listUsers: User[] = [];

  constructor( private http: HttpClient ) { }

  ListarUsuarios(){
    const url = `${this.apiUrl}/get-all-users`;

    // Crear los parámetros de la solicitud
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Enviar la solicitud POST con los parámetros
    return this.http.post<User[]>(url, { headers }).pipe(
      map((response: User[]) => {
        this.listUsers = response;
      })
    );
  }

  CerrarSesion(idSesion: number, idUsuario: number) {
    const url = `${this.apiUrl}/close-session`;

    // Crear los parámetros de la solicitud
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { p_idSesion: idSesion, p_idUsuario: idUsuario };

    // Enviar la solicitud POST con los parámetros
    return this.http.post<MessageResp>(url, body, { headers }).pipe(
      map((response: MessageResp) => {
        return response;
      })
    );
  }
}
