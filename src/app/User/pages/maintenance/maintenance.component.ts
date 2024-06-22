import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent {

  get resultados() {
    return this.serviceUser.listUsers;
  }

  constructor(private serviceUser: UserService) {
    console.log(this.serviceUser.listUsers);
  }

}
