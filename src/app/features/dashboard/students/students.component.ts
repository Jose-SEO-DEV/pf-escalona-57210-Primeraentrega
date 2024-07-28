import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { Student } from './models';
import { generateId } from '../../../shared/utils';
import { StudentsService } from '../../../core/services/students.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}





@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  Size20 = true;
 
  nuevoAlumno = '';

  displayedColumns: string[] = ['id', 'name', 'lastname', 'startDate', 'endDate', 'actions'];
  dataSource: Student[] = [];

  isLoading = false; 

  constructor (
    private matDialog: MatDialog, private studentsService: StudentsService) {}
    ngOnInit(): void {
      this.loadStudents();
    }

  loadStudents() { 
    this.isLoading = true;
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.dataSource = students;
      },
      complete: () => { 
        this.isLoading = false;
      }
    });
  }

  openDialog() : void { 
    this.matDialog.open(StudentDialogComponent).afterClosed() .subscribe({
      next: (value) => {
        console.log('sirve', value);
        this.nuevoAlumno = value.name;

        value['id'] = generateId(4);

        this.dataSource = [...this.dataSource, value];
      }
    });
  }


  editStudent(editingStudent: Student) {
    this.matDialog.open(StudentDialogComponent, {data: editingStudent}) .afterClosed() .subscribe({
      next: (value) => {

        if (!!value) {
          this.dataSource = this.dataSource.map((el) => el.id === editingStudent.id ? {...value, id: editingStudent.id} : el );

        }

      }
    });
  }

  deleteStudentById(id: string) {
    if (confirm('¿está seguro?')){
    this.dataSource = this.dataSource.filter((el) => el.id != id)
  }
}
}
