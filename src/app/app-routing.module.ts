import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/pages/login/login.component';
import { DashboardComponent } from './User/pages/dashboard/dashboard.component';
import { HomeComponent } from './User/pages/home/home.component';
import { MaintenanceComponent } from './User/pages/maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    loadChildren: () => import('./User/user.module').then(u => u.UserModule)
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
