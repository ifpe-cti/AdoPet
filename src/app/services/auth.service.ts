import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '../../../node_modules/angularfire2/firestore';
import { UsuarioCadastro } from '../model/UsuarioCadastro';
import { Usuario } from '../model/Usuario';
import { NotifyService } from './notify.service';
import { switchMap } from '../../../node_modules/rxjs/operators';
import { of } from '../../../node_modules/rxjs/observable/of';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private usuarioCollection: AngularFirestoreCollection<Usuario>;
	private userDetails: firebase.User = null;

	constructor(private firebaseAuth: AngularFireAuth, private angularfire: AngularFirestore,
		private router: Router, private notify: NotifyService) {
		this.usuarioCollection = this.angularfire.collection("usuario");

	}




	signInWithGoogle() {
		return this.firebaseAuth.auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider()
		)
	}

	
	signInWithFacebook() {
		return this.firebaseAuth.auth.signInWithPopup(
			new firebase.auth.FacebookAuthProvider()
		)
	}
	

	logout() {
		this.firebaseAuth.auth.signOut()
			.then((res) => this.router.navigate(['/']));
	}
	isLoggedIn() {
		if (this.userDetails == null) {
			return false;
		} else {
			return true;
		}
	}
}