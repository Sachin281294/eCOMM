import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwCcsTVfOnwuN5bPDZaLDAvoOKLQZM_J4",
  authDomain: "ecomm-19fd2.firebaseapp.com",
  projectId: "ecomm-19fd2",
  storageBucket: "ecomm-19fd2.appspot.com",
  messagingSenderId: "1073707718916",
  appId: "1:1073707718916:web:ccadcf40d9b68561821851",
  measurementId: "G-3ERSNJ95E3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
