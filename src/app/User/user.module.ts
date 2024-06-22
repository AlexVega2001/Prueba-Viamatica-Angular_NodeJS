import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    DashboardComponent,
    MaintenanceComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class UserModule { }
