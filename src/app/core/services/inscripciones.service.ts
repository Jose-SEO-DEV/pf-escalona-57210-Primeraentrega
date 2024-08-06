import { Injectable } from "@angular/core";
import { inscripcion } from "../../features/dashboard/inscripciones/models";
import { delay, Observable, of, pipe } from "rxjs";
import { generateId } from "../../shared/utils";

@Injectable ({
    providedIn: 'root'

})
export class InscripcionesService {
    private DATABASE: inscripcion [] = [
        {
            id: 'a12024',
            nombre: 'jose',
            curso: 77777,
        },
        {
            id: 'a12025',
            nombre: 'pedro',
            curso: 99999,
        },
        {
            id: 'a12026',
            nombre: 'juan',
            curso: 88888,
        },


    ];

    getInscripciones(): Observable<inscripcion[]>{
        return of ([...this.DATABASE]).pipe(delay(600) );
    }

    createInscripciones (inscripcion: inscripcion) {
        inscripcion.id = generateId(6);
        this.DATABASE.push(inscripcion);
        return inscripcion;
    }

    deleteInscripcionesById(id:string) {
        this.DATABASE = this.DATABASE.filter((inscripciones) => inscripciones.id !== id);
        return id;
    }

}