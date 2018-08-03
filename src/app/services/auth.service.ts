import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { Usuario } from '../model/Usuario';


@Injectable()
export class AuthService {
	private user: Observable<firebase.User>;
	private userDetails: firebase.User = null;
	private usuario: Usuario;

	constructor(private _firebaseAuth: AngularFireAuth, private angularfire: AngularFirestore, private router: Router) {

		this.user = _firebaseAuth.authState;
		this.user.subscribe(
			(user) => {
				if (user) {
					this.userDetails = user;
					console.log(this.userDetails);
				} else {
					this.userDetails = null;
				}
			}
		);
	}

	signInWithGoogle() {
		return this._firebaseAuth.auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider()
		)
	}
/*	signInRegular(email, senha) {
		const credential = firebase.auth.EmailAuthProvider.credential(email, senha);
		return this._firebaseAuth.auth.signInWithEmailAndPassword(email, senha)
	}*/

	signInRegular(formData): Promise<any> {
		let angularFireAuth = this._firebaseAuth;
		let angularFireStore = this.angularfire;
		return new Promise(function (resolve, reject) {
		  if (formData.valid) {
			angularFireAuth.auth.createUserWithEmailAndPassword(
			  formData.value.email,
			  formData.value.senha
			).then(
			  (success) => {
				//let usuario = new Usuario(formData.value.nome, formData.value.idade,
				 // formData.value.estado, formData.value.cidade, success.user.uid, angularFireStore);
				//usuario.add();
				resolve(success);
			  }).catch(
				(err) => {
				  if(err.code == "auth/weak-password"){
					reject(new Error("Sua senha deve conter no mínimo 6 caracteres."));
				  }else if(err.code == "auth/invalid-email"){
					reject(new Error("E-mail informado é inválido."));
				  }else if(err.code == "auth/email-already-in-use"){
					reject(new Error("Esse e-mail já está cadastrado."));
				  }
				})
		  }else{
			reject(new Error("Dados do formulário com erros de validação"))
		  }
		});
	}

	isLoggedIn() {
		if (this.userDetails == null) {
			return false;
		} else {
			return true;
		}
	}
	logout() {
		this._firebaseAuth.auth.signOut()
			.then((res) => this.router.navigate(['/']));
	}
}