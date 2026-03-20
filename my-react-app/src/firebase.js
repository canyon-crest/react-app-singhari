import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAmDO0DGwzZmbB1fRoyR1QO1lAkhQvayqU",
  authDomain: "my-react-app-dd7bd.firebaseapp.com",
  projectId: "my-react-app-dd7bd",
  storageBucket: "my-react-app-dd7bd.firebasestorage.app",
  messagingSenderId: "670791120548",
  appId: "1:670791120548:web:4b22c3effb9c45526a1831"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();