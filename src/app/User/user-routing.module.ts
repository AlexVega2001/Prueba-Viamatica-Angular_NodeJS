import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'dashboard',
            component: DashboardComponent
        },
        {
            path: 'maintenance',
            component: MaintenanceComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
