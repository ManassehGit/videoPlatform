import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
// import { firebaseReducer} from 'react-redux-firebase'
import {configureStore} from '@reduxjs/toolkit';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import videos from './videosSlice'

const fbConfig = {
    apiKey: "AIzaSyDUW0xdf-p8xrmPp9Y1JH4fiG-83QAtUjk",
    authDomain: "video-platform-c7c9f.firebaseapp.com",
    databaseURL: "https://video-platform-c7c9f-default-rtdb.firebaseio.com",
    projectId: "video-platform-c7c9f",
    storageBucket: "video-platform-c7c9f.appspot.com",
    messagingSenderId: "1018741265854",
    appId: "1:1018741265854:web:6f95d08b24b063fdce95ef",
    measurementId: "G-SL5FE5MQJN"
}

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = {
  firestore: firestoreReducer, // <- needed if using firestore
  videos: videos.reducer
}

// Create store with reducers and initial state
// const initialState = {}
export const store = configureStore({
    reducer: rootReducer
})

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}
