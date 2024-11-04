import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDtwzRpA27PuVr95cho4HnXYOsFyrL2Z9Q",
    authDomain: "mini-blog-8e178.firebaseapp.com",
    projectId: "mini-blog-8e178",
    storageBucket: "mini-blog-8e178.appspot.com",
    messagingSenderId: "858476602069",
    appId: "1:858476602069:web:fa23b3f7f3f8dfffddb85c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app };

