import firebase from 'firebase';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyAc2rMDHahc57Fm_WlAXftViBaFJzkFD3I",
    authDomain: "codigo-final.firebaseapp.com",
    projectId: "codigo-final",
    storageBucket: "codigo-final.appspot.com",
    messagingSenderId: "712705882516",
    appId: "1:712705882516:web:0138facb6ed5f620127781"
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire as default, firebase, storage};