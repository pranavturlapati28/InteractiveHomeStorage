export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

export interface Item {
  id: string;
  name: string;
  location: string;
  photoUrl?: string; // Will be local://photoId format
  createdAt: Date;
  userId: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface PhotoData {
  id: string;
  base64Data: string;
  uri: string;
  timestamp: Date;
}

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  AddItem: undefined;
  Search: undefined;
};
