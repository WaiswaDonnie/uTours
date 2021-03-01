
import  firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRei6i2esmFJLgPimUllOU9Fbuah5mTts",
    authDomain: "ugtours-f0380.firebaseapp.com",
    projectId: "ugtours-f0380",
    storageBucket: "ugtours-f0380.appspot.com",
    messagingSenderId: "130302672693",
    appId: "1:130302672693:web:69987742326a1aa111d67c",
    measurementId: "G-GJ8SZW38G0"
  };

  let app;
if(firebase.apps.length === 0){

    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

  const db  = app.firestore();

  export default db;
  