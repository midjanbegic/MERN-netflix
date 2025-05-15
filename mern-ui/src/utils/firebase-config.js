import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-netflix-clone-8a50e.firebaseapp.com",
  projectId: "react-netflix-clone-8a50e",
  storageBucket: "react-netflix-clone-8a50e.appspot.com",
  messagingSenderId: "819650518196",
  appId: "1:819650518196:web:81c185f9616b586fb48be1",
  measurementId: "G-HXDTEMBSDH"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);