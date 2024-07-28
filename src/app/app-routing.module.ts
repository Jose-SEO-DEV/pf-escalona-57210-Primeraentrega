import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';

const routes: Routes = [
{
  path: 'auth',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent,
  children: [
    {
      path: 'students',
      component: StudentsComponent,
    },
    {
      path: 'courses',
      component: CoursesComponent,
    }
    
  ]
}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
