import { Component } from '@angular/core';
import { EnrollmentsService } from '../../../core/services/enrollments.service';
import { Observable } from 'rxjs';
import { Enrollment } from './models';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss'
})
export class EnrollmentsComponent { 
  enrollments$: Observable<Enrollment[]>;

  constructor ( private enrollmetsService: EnrollmentsService) {
    this.enrollments$ = this.enrollmetsService.getEnrollments()

  }

}
