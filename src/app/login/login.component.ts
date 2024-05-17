import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { addDoc, collection } from "firebase/firestore";
import { getFirestore, doc } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { docData, getDoc, setDoc } from '@angular/fire/firestore';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  isModalOpen = false;
  isSignUpOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  Open(isOpen: boolean) {
    this.isSignUpOpen = isOpen;
  }    

  addUser={
    name:  "",
    lastName: "",
    user:  "",
    email:  "",
    password:  "",
  }/*


  firestore = getFirestore(initializeApp(environment.firebaseConfig));

  musicApp = collection(this.firestore, 'users');

  addDocument(){    
    const newDoc = addDoc(this.musicApp, {
      name: this.addUser.name,
      lastName: this.addUser.lastName,
      user: this.addUser.user,
      email: this.addUser.email,
      password: this.addUser.password,
    })
  };*/
  

}