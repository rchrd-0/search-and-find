import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  Timestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import uniqid from 'uniqid';
import { db } from '../firebase/firebase-config';

const fetchCharacterList = async (level) => {
  const docRef = doc(db, 'target', level);
  const characters = await getDoc(docRef);
  return characters;
};

const fetchTarget = async (id, level) => {
  const characters = await fetchCharacterList(level);
  return characters.exists() ? characters.data()[id] : console.log('Whoops!');
};

const fetchLeaderboard = async (level) => {
  const collectionRef = collection(db, `leaderboard-${level}`);
  const q = query(collectionRef, orderBy('score'));
  const sortedLeaderboard = await getDocs(q);

  return sortedLeaderboard.docs.map((item) => ({ ...item.data() }));
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

export { fetchTarget, addNewScore, fetchLeaderboard };
