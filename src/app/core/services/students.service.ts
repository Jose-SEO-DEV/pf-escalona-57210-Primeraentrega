import { Injectable } from "@angular/core";
import { Observable, timeout } from "rxjs";
import { Student } from "../../features/dashboard/students/models";

@Injectable({ providedIn: 'root'})
export class StudentsService {

    getStudents(): Observable<Student[]> {



        return new Observable((observer) => {
            setTimeout(() => { 
                observer.next([
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

                ]);
                observer.complete();
            }, 1500); 
           
        })

   
    }
    
}