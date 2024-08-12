import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
  
    {
      path: 'home',
      loadChildren: () => import ('./home/home.module').then((M) => M.HomeModule)

    },
    {
      path: 'inscripciones',
      loadChildren: () => import ('./inscripciones/inscripciones.module').then((P) => P.InscripcionesModule )
    },
    {
      path: 'students',
      canActivate: [adminGuard],
      loadChildren: () => import ('./students/students.module').then((referencia3) => referencia3.StudentsModule)
    },
    {
      path: 'courses',
     loadChildren: () => import ('./courses/courses.module').then((referencia4) => referencia4.CoursesModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
