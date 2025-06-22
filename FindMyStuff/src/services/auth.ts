import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser 
} from 'firebase/auth';
import { getFirebaseAuth } from './firebase';
import { User } from '../types';

export const signUp = async (email: string, password: string): Promise<User> => {
  try {
    const auth = getFirebaseAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || undefined,
      photoURL: firebaseUser.photoURL || undefined,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signIn = async (email: string, password: string): Promise<User> => {
  try {
    const auth = getFirebaseAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;
    
    return {
      id: firebaseUser.uid,
      email: firebaseUser.email || '',
      displayName: firebaseUser.displayName || undefined,
      photoURL: firebaseUser.photoURL || undefined,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    const auth = getFirebaseAuth();
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  const auth = getFirebaseAuth();
  return onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      const user: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email || '',
        displayName: firebaseUser.displayName || undefined,
        photoURL: firebaseUser.photoURL || undefined,
      };
      callback(user);
    } else {
      callback(null);
    }
  });
};
