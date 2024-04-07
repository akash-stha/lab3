import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxzxSUPmBw-dpxeIVEBX7xCtiuMosqgM8",
  authDomain: "lab4-financialapp.firebaseapp.com",
  projectId: "lab4-financialapp",
  storageBucket: "lab4-financialapp.appspot.com",
  messagingSenderId: "201771203771",
  appId: "1:201771203771:web:d6be5993b48fc6f97bbd9e",
};
const firebaseApp = () => initializeApp(firebaseConfig);

if (getApps().length < 1) {
  firebaseApp();
}

const db = getFirestore(firebaseApp());

export { db };
