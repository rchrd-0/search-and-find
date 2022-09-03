import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';
import uniqid from 'uniqid';
import { db } from '../firebase/firebase-config';

const fetchCharacterList = async (level) => {
  const docRef = doc(db, 'target', level);
  const characters = await getDoc(docRef);
  return characters.data();
};

// const fetchTarget = async (id, level) => {
//   const characters = await fetchCharacterList(level);
//   // return characters.exists() ? characters.data()[id] : console.log('Whoops!');
// };

const fetchLeaderboard = async (level, n) => {
  const collectionRef = collection(db, `leaderboard-${level}`);
  const q = query(collectionRef, orderBy('score'), limit(n));
  const sortedLeaderboard = await getDocs(q);
  return sortedLeaderboard.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));
};

const addNewScore = async (level, score, name) => {
  const playerId = uniqid();

  const docRef = doc(db, `leaderboard-${level}`, playerId);
  await setDoc(docRef, {
    name,
    score,
    date: Timestamp.now(),
  });
};

export { fetchCharacterList, addNewScore, fetchLeaderboard };
