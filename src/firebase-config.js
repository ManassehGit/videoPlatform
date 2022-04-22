import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUW0xdf-p8xrmPp9Y1JH4fiG-83QAtUjk",
  authDomain: "video-platform-c7c9f.firebaseapp.com",
  databaseURL: "https://video-platform-c7c9f-default-rtdb.firebaseio.com",
  projectId: "video-platform-c7c9f",
  storageBucket: "video-platform-c7c9f.appspot.com",
  messagingSenderId: "1018741265854",
  appId: "1:1018741265854:web:6f95d08b24b063fdce95ef",
  measurementId: "G-SL5FE5MQJN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
