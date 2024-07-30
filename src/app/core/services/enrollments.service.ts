import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Enrollment } from "../../features/dashboard/enrollments/models";

@Injectable ({providedIn:'root'})
export class EnrollmentsService {
    private MY_DATABASE: Enrollment [] = [

        {
            studentId: 'estudiante1',
            courseId: 'curso1',

        },
        {
            studentId: 'estudiante2',
            courseId: 'curso2',

        },
        {
            studentId: 'estudiante3',
            courseId: 'curso3',

        },   
    ];

    getEnrollments(): Observable<Enrollment[]> {
        return of<Enrollment[]> (this.MY_DATABASE).pipe(delay(300));
    }
}