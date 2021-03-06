import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: firebase.User = null;
	private idUserLogado: String = null;
	private nomeUserLogado: String = null;

	constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
		this.user = firebaseAuth.authState;
		this.user.subscribe(
			(user) => {
				if (user) {
					this.userDetails = user;
					this.nomeUserLogado = this.userDetails.displayName;
					this.idUserLogado = this.userDetails.uid;
				} else {
					this.userDetails = null;
				}
			});
	}
	getUsuarioLogado() {
		return this.idUserLogado;
	}
	getNomeUsuarioLogado() {
		return this.nomeUserLogado;
	}
	signInWithGoogle() {
		return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
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