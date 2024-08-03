import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { course } from './models';
import { generateId } from '../../../shared/utils';
import { CoursesService } from '../../../core/services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  Size20 = true

  nombreCurso= '';
  
  displayedColumns: string[] = ['id', 'name', 'startDate', 'endDate', 'actions'];
  dataSource:  course [] = [];

  isLoading = false;

  constructor(private matDialog: MatDialog, private courseService: CoursesService) {}
  ngOnInit(): void {
    this.loadCourses()
  }

  loadCourses() {
    this.isLoading = true;
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  openDialog(): void {
    this.matDialog.open(CourseDialogComponent).afterClosed().subscribe({
      next: (value) => {
        console.log('recibi valor: ', value); 
        this.nombreCurso = value.name; 

        value['id'] = generateId(4);
        this.isLoading = true;
        this.courseService.addCourse(value).subscribe({
          next: (courses) => {
            this.dataSource = [...courses];
          },
          complete: () => {
            this.isLoading = false;
          }
        });
      },
    });
  }

  editCourse(editingCourse: course) {
    this.matDialog.open(CourseDialogComponent, { data: editingCourse}).afterClosed().subscribe({ next: (value) => {

      if (!!value) {

        this.courseService.editCourseById(editingCourse.id, value).subscribe({
          next: (courses) => {
            this.dataSource = [...courses];
          },
        });
      }
    },
   });
  }


  deleteCourseById(id: string) {
    if (confirm('Estas seguro?')) {
      this.isLoading = true;

      this.courseService.deleteCourseById(id).subscribe({
        next: (courses) => {
          this.dataSource = [...courses];
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    };
   }
}
