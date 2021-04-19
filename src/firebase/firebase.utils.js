import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCqRvFiPOWuIFiDaIKkkoqzODV4Bvogf9g",
    authDomain: "kk-clothing.firebaseapp.com",
    projectId: "kk-clothing",
    storageBucket: "kk-clothing.appspot.com",
    messagingSenderId: "844495921170",
    appId: "1:844495921170:web:049b737da37fc2734578cb"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;