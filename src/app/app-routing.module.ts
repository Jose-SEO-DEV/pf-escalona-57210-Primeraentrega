import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
{
  path: 'auth',
  loadChildren: () => import('./features/auth/auth.module').then((referenciaAlArchivo) => referenciaAlArchivo.AuthModule),
},
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard],
  loadChildren: () => import('./features/dashboard/dashboard.module').then((referencia2) => referencia2.DashboardModule),
},
{
  path: '**',
  redirectTo: '/auth',
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
