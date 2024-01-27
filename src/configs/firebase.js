import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ-LXWJJtKSRn5tdCyrm_Fmdq-WgNyyMo",
  authDomain: "sothuchi-c2cd2.firebaseapp.com",
  projectId: "sothuchi-c2cd2",
  storageBucket: "sothuchi-c2cd2.appspot.com",
  messagingSenderId: "553283911747",
  appId: "1:553283911747:web:020170407a64c8dc3e94f6",
  measurementId: "G-814KTR23XJ",
};

const app = initializeApp(firebaseConfig);
const projectAuth = getAuth();
const projectStorage = getStorage();
const projectFirestore = getFirestore(app);

const timestamp = serverTimestamp();

export { projectAuth, projectFirestore, projectStorage, timestamp };
