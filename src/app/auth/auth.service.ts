import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  constructor(private router: Router) {
  }

  static get Token(): string {
    return sessionStorage.getItem('token');
  }

  static set Token(token: string) {
    sessionStorage.setItem('token', token);
  }

  public registerUser(email: string, password: string): void {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.router.navigate([ '/' ]);
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => AuthService.Token = token);
      })
      .catch((error) => console.log(error));

  }

  public loginUser(email: string, password: string): void {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
          this.router.navigate([ '/' ]);
          firebase.auth().currentUser.getIdToken()
            .then((token: string) => AuthService.Token = token);
        })
        .catch(error => console.log(error));
  }

  public logOut(): void {
    firebase.auth().signOut();
    sessionStorage.removeItem('token');
  }

  public getToken(): string {
    firebase.auth().currentUser.getIdToken()
        .then((token: string) => AuthService.Token = token);
    return AuthService.Token;
  }

  public isAuthenticated(): boolean {
    return AuthService.Token != null;
  }
}
