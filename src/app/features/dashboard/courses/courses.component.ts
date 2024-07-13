import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { course } from './models';
import { generateId } from '../../../shared/utils';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  nombreCurso= '';
  
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource:  course [] = [
    {
      id: '1990',
      name: 'Angular',
      endDate: new Date(),
      startDate: new Date(),
    },
    {
      id: '1991',
      name: 'Java',
      endDate: new Date(),
      startDate: new Date(),
    },
    {
      id: '1992',
      name: 'Css',
      endDate: new Date(),
      startDate: new Date(),
    },
    
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(CourseDialogComponent).afterClosed().subscribe({
      next: (value) => {
        console.log('recibi valor: ', value); 
        this.nombreCurso = value.name; 

        value['id'] = generateId(4);

        this.dataSource = [...this.dataSource, value ];

      },
    });
  }

  editCourse(editingCourse: course) {
    this.matDialog.open(CourseDialogComponent, { data: editingCourse}).afterClosed().subscribe({ next: (value) => {

      if (!!value) {
        this.dataSource = this.dataSource.map((el) => el.id === editingCourse.id ? {...value, id: editingCourse.id } : el )
      }

    }
   });
  }

  deleteCourseById(id: string) {

    this.dataSource= this.dataSource.filter((el) => el.id != id) 
   }
}
