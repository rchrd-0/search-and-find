import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

const getTarget = async (id, level) => {
  const targetDoc = doc(db, 'target', level);
  const characters = await getDoc(targetDoc);

  return characters.exists() ? characters.data()[id] : console.log('Whoops!');
};

export { getTarget };
