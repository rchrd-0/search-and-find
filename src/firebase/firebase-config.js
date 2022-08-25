import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCdIPJk7u4uh-zzSG6Gm0UC-3NCf2LcXa4',
  authDomain: 'retrosearch-b7a7d.firebaseapp.com',
  projectId: 'retrosearch-b7a7d',
  storageBucket: 'retrosearch-b7a7d.appspot.com',
  messagingSenderId: '851355007780',
  appId: '1:851355007780:web:4475764959460352a6d1b1',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
