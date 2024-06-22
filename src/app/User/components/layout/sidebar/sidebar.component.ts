import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageResp } from 'src/app/User/interfaces/user.interface';
import { UserService } from 'src/app/User/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(private router: Router,
              private serviceUrl: UserService
  ) {}

  logout(): void {
    let idSesion: number = Number(localStorage.getItem('session_id'));
    let idUsuario: number = Number(localStorage.getItem('user_id'));
    this.serviceUrl.CerrarSesion(idSesion, idUsuario).subscribe(
      (response: any) => {
        if (response.success) { 
          localStorage.removeItem('session_id');
          localStorage.removeItem('user_id');
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.log('Hubo un problema al cerrar sesión');
      }
    );
  }
}
