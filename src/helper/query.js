import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export const addMenu = async (data) => {
  let newData = data;
  newData = Object.assign({}, newData, { createdAt: serverTimestamp() });

  try {
    const docRef = await addDoc(collection(db, 'menus'), newData);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getMenus = async () => {
  const querySnapshot = await getDocs(
    collection(db, 'menus'),
    orderBy('createdAt', 'desc'),
  );
  const menus = [];
  querySnapshot.forEach((doc) => {
    menus.push({ id: doc.id, ...doc.data() });
  });
  return menus;
};

export const updateMenu = async (id, updatedData) => {
  try {
    await updateDoc(doc(db, 'menus', id), updatedData);
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};

export const deleteMenu = async (id) => {
  try {
    await deleteDoc(doc(db, 'menus', id));
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};
