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