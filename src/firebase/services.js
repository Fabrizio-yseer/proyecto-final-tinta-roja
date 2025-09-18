import { db } from './config';
import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'products'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };
  return null;
};

export const saveOrder = async (order) => {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef.id;
};