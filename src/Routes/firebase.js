import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbnz5cdeNGK0W9cypDEec1cs5QUBeVbPc",
  authDomain: "app-kef.firebaseapp.com",
  projectId: "app-kef",
  storageBucket: "app-kef.appspot.com",
  messagingSenderId: "328686453167",
  appId: "1:328686453167:web:19bf753718c3c995d66f5a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
  }
};

const registerUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert(
      "Mail de réinitialisation envoyé, veuillez vérifier votre boîte email !"
    );
  } catch (err) {
    console.error(err);
  }
};

const logOut = () => {
    signOut(auth)
}

export { auth, db, logIn, registerUser, resetPassword, logOut }