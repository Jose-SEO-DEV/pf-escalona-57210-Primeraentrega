import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';
import { CourseDetailComponent } from './features/dashboard/courses/pages/course-detail/course-detail.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { InscripcionesComponent } from './features/dashboard/inscripciones/inscripciones.component';

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
      path: 'home',
      component: HomeComponent,

    },
    {
      path: 'inscripciones',
      component: InscripcionesComponent,
    },
    {
      path: 'students',
      component: StudentsComponent,
    },
    {
      path: 'courses',
      component: CoursesComponent,
    },
    {
      path: 'courses/:id',
      component: CourseDetailComponent,

    },
    {
      path: '**',
      redirectTo: '/dashboard/home'
    }
    
  ],
}, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
