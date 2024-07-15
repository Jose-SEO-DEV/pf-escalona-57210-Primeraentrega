import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss'
})
export class StudentDialogComponent {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public editStudent?: Student
   ) {

    this.studentForm = this.fb.group ({ 
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      startDate: [],
      endDate: [],

    });
    console.log('editando', this.editStudent);

    if (this.editStudent) {
    this.studentForm.patchValue(this.editStudent)
   }   
  }
  onSubmit(): void {

    if (this.studentForm.valid) {this.matDialogRef.close(this.studentForm.value)} else {
      /// Error en los datos ingresados
    }
  }
}
