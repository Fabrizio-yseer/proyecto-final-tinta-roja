
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB_d5PF9h9YpGCt9htT2vCGlcdn8mMd8Rk",
  authDomain: "libreria-client.firebaseapp.com",
  projectId: "libreria-client",
  storageBucket: "libreria-client.appspot.com",
  messagingSenderId: "527175401008",
  appId: "1:527175401008:web:dd9000a264838dd13937f5",
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
