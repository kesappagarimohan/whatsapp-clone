import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNnCL0dgriLgW4lSpnbm9CISKPIxYBtwU",
  authDomain: "mohan-whatsapp-clone.firebaseapp.com",
  projectId: "mohan-whatsapp-clone",
  storageBucket: "mohan-whatsapp-clone.appspot.com",
  messagingSenderId: "774840613084",
  appId: "1:774840613084:web:c5b1dd8a4f2383323a9c19",
  measurementId: "G-DRGFSG9K2F"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;