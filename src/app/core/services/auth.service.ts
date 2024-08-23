import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { User } from '../../features/dashboard/Users/models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { setAuthUser, unsetAuthUser } from '../store/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private VALID_TOKEN = '123456789'

  private _authUser$ = new BehaviorSubject<User | null >(null)

  authUser$ = this._authUser$.asObservable();

  constructor(private http: HttpClient, private router: Router, private store: Store<RootState>) { }

  

  login(data: { email: string; password: string}) {

    this.http.get<User[]>(environment.apiUrl + '/users', {

      params: {
        email: data.email,
        password: data.password,
      },
    }).subscribe(
      {
        next: (response) => { 
          if (!response.length) {
            alert('usuario o password inválido')
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({payload: authUser }))
            this._authUser$.next(authUser);
            this.router.navigate(['dashboard', 'home' ])
          }

        },
        error: (error) => {
          alert('error al iniciar sesión')
        }
      });
  }


logout () {
  localStorage.removeItem('token');
  this.store.dispatch(unsetAuthUser())
  this._authUser$.next(null);
  this.router.navigate(['auth', 'login']);
}



verifyToken(): Observable<boolean> {
  const token = localStorage.getItem('token');
  if (!token) {
    return of(false);
  }
  return this.http
    .get<User[]>(environment.apiUrl + '/users', {
      params: {
        token,
      },
    })
    .pipe(
      map((response) => {
        if (!response.length) {
          return false;
        } else {
          const authUser = response[0];
          localStorage.setItem('token', authUser.token);
          this.store.dispatch(setAuthUser({payload: authUser}))
          this._authUser$.next(authUser);
          return true;
        }
      })
    );
}


  verificarToken () {}

  obtenerUsuarioAutenticado() {}

  obtenerUsuarioObservable(): Observable<any> {
    return new Observable ((observer) => {
      setInterval(() => {
        observer.next({
          name: 'name fake',
          email: 'fake@mail.com'
        });
      }, 2000);
    });
  }

  obtenerUsuarioPromise(): Promise<any> {
    return new Promise ((resolve, reject) => {
      reject( 'error desconocido');

      setTimeout(() => {
        resolve({
          name: 'name fake',
          email: 'fake@mail.com'
        });
      }, 2000);
    });
  }
}
