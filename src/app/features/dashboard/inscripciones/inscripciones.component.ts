import { Component, OnInit } from '@angular/core';
import { inscripcion } from './models';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { InscripcionesService } from '../../../core/services/inscripciones.service';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  inscripciones: inscripcion [] = [];
  loading = false
  displayedColumns= ['id', 'nombre', 'curso', 'acciones'];
  inscripcionesForm: FormGroup; 
  EditingInscripciones: inscripcion | null = null;


  constructor( private fb: FormBuilder, private InscripcionesService: InscripcionesService ) {
    this.inscripcionesForm = this.fb.group({
      nombre: [null, [Validators.required]],
      curso: [null, [Validators.required]], 
    });
  }
  ngOnInit(): void { this.loadInscripciones();
    
  }

  loadInscripciones () {
    this.loading = true
    this.InscripcionesService.getInscripciones().subscribe({
      next: (inscripcionesFromDB) => {
        this.inscripciones = inscripcionesFromDB
      },
      error: () => {},
      complete: () => {
        this.loading = false
      }
    })
  }

  onSubmit(): void {
    if (this.inscripcionesForm.invalid) {
      alert( 'el form es invalido')
    } else {

      if (!!this.EditingInscripciones){

      } else {

        this.InscripcionesService.createInscripciones(this.inscripcionesForm.value);

      }
    

      this.loadInscripciones();
    }

  }

  onDelete(id: string) { 
    if (confirm('Esta seguro?')) {
      this.InscripcionesService.deleteInscripcionesById(id)
      this.loadInscripciones();
    }
  }

  onEdit(editingInscripciones: inscripcion) {
    this.EditingInscripciones = editingInscripciones;

    this.inscripcionesForm.patchValue(editingInscripciones);
  }
}
