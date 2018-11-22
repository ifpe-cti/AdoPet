import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: firebase.User = null;

	constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
		this.user = firebaseAuth.authState;
		this.user.subscribe(
			(user) => {
				if (user) {
					this.userDetails = user;
					//sessionStorage.setItem('email', this.userDetails.email)
					//console.log(sessionStorage.getItem('email'))					
					console.log(this.userDetails);
				} else {
					this.userDetails = null;
				}
			}
		);
	}

	signInWithGoogle() {
		return this.firebaseAuth.auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider()
		)
	}

	isLoggedIn() {
		if (this.userDetails == null) {
			return false;
		} else {
			return true;
		}
	}

	logout() {
		this.firebaseAuth.auth.signOut()
			.then(() => this.router.navigate(['/']));
	}
}