import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CoursesModule } from './courses/courses.module';
import {MatListModule} from '@angular/material/list';
import { ClasePipesModule } from './clase-pipes/clase-pipes.module';
import { StudentsModule } from './students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';







@NgModule({
  declarations: [
    DashboardComponent
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, CoursesModule, MatListModule, ClasePipesModule, StudentsModule, SharedModule,InscripcionesModule, MatInputModule, MatFormFieldModule,
  ]
})
export class DashboardModule { }
