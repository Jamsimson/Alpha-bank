import { boot } from "quasar/wrappers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHy9HdhJn8ZgAWfk25IPt12-xetDtGVoU",
  authDomain: "test-62ef1.firebaseapp.com",
  projectId: "test-62ef1",
  storageBucket: "test-62ef1.appspot.com",
  messagingSenderId: "392040850802",
  appId: "1:392040850802:web:96a832533f241c44d629eb",
  measurementId: "G-718YKE5BM2",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

console.log("Firebase initialized");
auth.languageCode = "th";

export default boot(({ app }) => {
  app.config.globalProperties.$firebase = firebase;
  app.config.globalProperties.$analytics = analytics;
  app.config.globalProperties.$db = db;
  app.config.globalProperties.$auth = auth;
});

export { firebase, analytics, db, auth };
