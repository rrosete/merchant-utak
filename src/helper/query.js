import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';

export const AddMenu = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'menus'), data);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getMenus = async () => {
  const querySnapshot = await getDocs(collection(db, 'menus'));
  const menus = [];
  querySnapshot.forEach((doc) => {
    menus.push({ id: doc.id, ...doc.data() });
  });
  return menus;
};

export const updateMenu = async (id, updatedData) => {
  try {
    await updateDoc(doc(db, 'menus', id), updatedData);
    console.log('Document successfully updated');
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};

export const deleteMenu = async (id) => {
  try {
    await deleteDoc(doc(db, 'menus', id));
    console.log('Document successfully deleted');
  } catch (e) {
    console.error('Error deleting document: ', e);
  }
};
