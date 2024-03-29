import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVUxXtZUb23FZmR1e6KqDt5PWTSNbIsCQ',
  authDomain: 'portfolio-2d99f.firebaseapp.com',
  projectId: 'portfolio-2d99f',
  storageBucket: 'portfolio-2d99f.appspot.com',
  messagingSenderId: '501578199573',
  appId: '1:501578199573:web:b4eaa2d11a865095a5941c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
