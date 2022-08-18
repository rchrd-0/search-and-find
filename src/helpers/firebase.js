import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const getCharacters = async (level) => {
  const targetLevel = doc(db, 'target', level);
  const characters = await getDoc(targetLevel);
  return characters;
};

const getTargetCharacter = async (id, level) => {
  const characters = await getCharacters(level);
  return characters.exists() ? characters.data()[id] : console.log('Whoops!');
};
export { getTargetCharacter, getCharacters };
