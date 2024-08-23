import { Injectable } from "@angular/core";
import { Observable, timeout } from "rxjs";
import { Student } from "../../features/dashboard/students/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root'})
export class StudentsService {

  constructor( private httpClient : HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(environment.apiUrl +'/students')
}

createStudents(student: Student) {
    return this.httpClient.post(environment.apiUrl + '/students', student  );
}

editStudents(id: string, update: Partial<Student>){
    return this.httpClient.put(environment.apiUrl + '/students/' + id, update)
}

deleteStudentsById(id: string) {
    return this.httpClient.delete(environment.apiUrl + '/students/' + id)   
}
}