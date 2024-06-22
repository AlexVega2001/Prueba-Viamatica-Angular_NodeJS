import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    MaintenanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    DashboardComponent,
    MaintenanceComponent
  ]
})
export class UserModule { }
