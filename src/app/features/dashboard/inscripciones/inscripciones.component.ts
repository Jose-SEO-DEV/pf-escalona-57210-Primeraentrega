import { Component, OnInit } from '@angular/core';
import { inscripcion } from './models';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { InscripcionesService } from '../../../core/services/inscripciones.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  Size20 = true
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
      },
    });
  }

  onSubmit(): void {
    if (this.inscripcionesForm.invalid) {
      alert( 'el form es invalido')
    } else {
      if (!!this.EditingInscripciones){
        this.InscripcionesService.editInscripcionesById(this.EditingInscripciones.id, this.inscripcionesForm.value).pipe(tap(() => {this.loadInscripciones(); this.EditingInscripciones = null;})).subscribe(); 
      } else {
        this.InscripcionesService.createInscripciones(this.inscripcionesForm.value).pipe( tap(() => this.loadInscripciones() )).subscribe();
      };
    }
  }

  onDelete(id: string) { 
    if (confirm('Está seguro?')) {
      this.InscripcionesService.deleteInscripcionesById(id).pipe(tap(() => this.loadInscripciones())).subscribe();
    }
  }

  onEdit(editingInscripciones: inscripcion) {
    this.EditingInscripciones = editingInscripciones;
    this.inscripcionesForm.patchValue(editingInscripciones);
  }
}
