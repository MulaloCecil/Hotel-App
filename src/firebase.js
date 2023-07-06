import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCys-x_2bQ094O-9wqojEy7Fos4iCCT3fs",
  authDomain: "hayani-hotel-ee39a.firebaseapp.com",
  projectId: "hayani-hotel-ee39a",
  storageBucket: "hayani-hotel-ee39a.appspot.com",
  messagingSenderId: "118320333308",
  appId: "1:118320333308:web:b6faf62dc81f6b8c69f279",
  measurementId: "G-LX0H34MP5X"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)



