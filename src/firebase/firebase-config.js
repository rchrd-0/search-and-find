import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyCXKwL67JGhqRdIj2sScdc9PDJeFXJR3ZA',
  authDomain: 'top-search-and-find.firebaseapp.com',
  projectId: 'top-search-and-find',
  storageBucket: 'top-search-and-find.appspot.com',
  messagingSenderId: '653895909804',
  appId: '1:653895909804:web:215a9120c9599bb917fa09',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
