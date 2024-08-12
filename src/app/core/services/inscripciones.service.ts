import { Injectable } from "@angular/core";
import { inscripcion } from "../../features/dashboard/inscripciones/models";
import { delay, Observable, of, pipe } from "rxjs";
import { generateId } from "../../shared/utils";
import { I, P } from "@angular/cdk/keycodes";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'

})
export class InscripcionesService {
    private DATABASE: inscripcion[] = [
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

    constructor(private httpclient: HttpClient) { }

    getInscripciones(): Observable<inscripcion[]> {
        return this.httpclient.get<inscripcion[]>(environment.apiUrl +'/inscripciones')
    }

    createInscripciones(inscripcion: inscripcion) {
        return this.httpclient.post(environment.apiUrl + '/inscripciones', inscripcion);
    }

    editInscripcionesById(id: string, update: Partial<inscripcion >){
        return this.httpclient.put(environment.apiUrl + '/inscripciones/' + id, update)
    }

    deleteInscripcionesById(id: string) {
        return this.httpclient.delete(environment.apiUrl + '/inscripciones/' + id)   
    }
}