// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmv1-26hE1f46zOlA4xFO6HBjNBuyADu4",
  authDomain: "red-torres.firebaseapp.com",
  projectId: "red-torres",
  storageBucket: "red-torres.appspot.com",
  messagingSenderId: "82299919834",
  appId: "1:82299919834:web:70ccfe45e6070b05ceb4e3",
  measurementId: "G-50GN0VR7PQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);



// Get a list of cities from your database
async function getUsuarios(db) {
  const usersCol = collection(db, 'usuarios');
//   console.log("coleccion usuarios:")
//   console.log(usersCol)
  const userSnapshot = await getDocs(usersCol);
  const usersList = userSnapshot.docs.map(doc => doc.data());
//  console.log(usersList[0])
    return usersList;
};

export { getUsuarios, db }