import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { course } from "../../features/dashboard/courses/models";

@Injectable ({ providedIn: 'root'})
export class CoursesService {
  private MY_DATABASE = [
    {
        id: '1990',
        name: 'Angular',
        endDate: new Date(),
        startDate: new Date(),
      },
      {
        id: '1991',
        name: 'Java',
        endDate: new Date(),
        startDate: new Date(),
      },
      {
        id: '1992',
        name: 'Css',
        endDate: new Date(),
        startDate: new Date(),
      },
];


editCourseById(id: string, update: course) {
  this.MY_DATABASE = this.MY_DATABASE.map((el) => el.id === id ? {...update, id } : el );
  return this.getCourses();
}




    getCourses(): Observable<course[]> {

        return new Observable ((observer) => {
            setTimeout(() => {
                observer.next(this.MY_DATABASE);
            observer.complete();
            }, 1500);
        });
    }

    addCourse(course: course): Observable<course[]>{
      this.MY_DATABASE.push(course);
      return this.getCourses();
  }

  deleteCourseById(id: string): Observable<course[]> {
    this.MY_DATABASE= this.MY_DATABASE.filter((el) => el.id != id);
    return this.getCourses();

  }
}