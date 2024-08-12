import { Injectable } from "@angular/core";
import { Observable, timeout } from "rxjs";
import { Student } from "../../features/dashboard/students/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root'})
export class StudentsService {

  private students: Student[] = [
    {
      id: '1234',
      name: 'Juan',
      lastname: 'Perez',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '9876',
      name: 'José',
      lastname: 'Hidalgo',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '4312',
      name: 'Silvia',
      lastname: 'Martinez',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '4892',
      name: 'Lautaro',
      lastname: 'Godoy',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '6578',
      name: 'Luciano',
      lastname: 'Reyes',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      id: '8313',
      name: 'Vinicius',
      lastname: 'Da Silva',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

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