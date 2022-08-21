import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  Timestamp,
  updateDoc,
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

// const fetchLevelScores = async (level) => {
//   const targetLevel = doc(db, 'leaderboard', level);
//   const leaderboard = await getDoc(targetLevel);
//   return leaderboard;
// };

const addNewScore = async (level, score, name) => {
  const playerId = uniqid();

  const docRef = doc(db, 'leaderboard', level);
  await updateDoc(docRef, playerId, {
    name,
    score,
    date: Timestamp.now(),
  });
};

export { fetchTarget, addNewScore };
