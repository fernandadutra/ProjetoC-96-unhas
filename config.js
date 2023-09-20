import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCHqgDDMySgfIhELYSNI2nXQxRDufmzeUI",
  authDomain: "appnails-4175d.firebaseapp.com",
  databaseURL: "https://appnails-4175d-default-rtdb.firebaseio.com",
  projectId: "appnails-4175d",
  storageBucket: "appnails-4175d.appspot.com",
  messagingSenderId: "666455683063",
  appId: "1:666455683063:web:81788fed339f4086c208f2",
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
