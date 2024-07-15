import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { Student } from './models';
import { generateId } from '../../../shared/utils';

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
export class StudentsComponent {

  Size20 = true;
 
  nuevoAlumno = '';

  displayedColumns: string[] = ['id', 'name', 'lastname', 'startDate', 'endDate', 'actions'];
  dataSource: Student[] = [
    {
      id: '1234',
      name: 'Juan',
      lastname: 'Perez',
      startDate: new Date (),
      endDate: new Date(),
    },
    {
      id: '9876',
      name: 'José',
      lastname: 'Hidalgo',
      startDate: new Date (),
      endDate: new Date(),
    },
    {
      id: '4312',
      name: 'Silvia',
      lastname: 'Martinez',
      startDate: new Date (),
      endDate: new Date(),
    },
    {
      id: '4892',
      name: 'Lautaro',
      lastname: 'Godoy',
      startDate: new Date (),
      endDate: new Date(),
    },
    {
      id: '6578',
      name: 'Luciano',
      lastname: 'Reyes',
      startDate: new Date (),
      endDate: new Date(),
    },
    {
      id: '8313',
      name: 'Vinicius',
      lastname: 'Da Silva',
      startDate: new Date (),
      endDate: new Date(),
    },
    
  ];

  constructor (private matDialog: MatDialog) {}

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
