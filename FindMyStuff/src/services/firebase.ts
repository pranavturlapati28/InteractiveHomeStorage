import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDk2cd8twuqDJjvrPYL_SQ3ddir-YnwTf8",
  authDomain: "homeinventoryap.firebaseapp.com",
  projectId: "homeinventoryap",
  storageBucket: "homeinventoryap.appspot.com",
  messagingSenderId: "364358352787",
  appId: "1:364358352787:web:793a95a8ab67591317f266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
let _auth: any = null;
let _db: any = null;
let _storage: any = null;

// Lazy initialization to ensure proper registration
export const getFirebaseAuth = () => {
  if (!_auth) {
    _auth = getAuth(app);
  }
  return _auth;
};

export const getFirebaseDB = () => {
  if (!_db) {
    _db = getFirestore(app);
  }
  return _db;
};

export const getFirebaseStorage = () => {
  if (!_storage) {
    _storage = getStorage(app);
  }
  return _storage;
};

// Export for backward compatibility
export const auth = getFirebaseAuth();
export const db = getFirebaseDB();
export const storage = getFirebaseStorage();

export default app;
