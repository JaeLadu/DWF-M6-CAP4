import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyCD3xsOmWtOBhQVf__6z00_ckkB7zHjJEQ",
   authDomain: "dwf-mod6-cap4realtimedb.firebaseapp.com",
   databaseURL: "https://dwf-mod6-cap4realtimedb-default-rtdb.firebaseio.com",
   projectId: "dwf-mod6-cap4realtimedb",
   storageBucket: "dwf-mod6-cap4realtimedb.appspot.com",
   messagingSenderId: "329114343100",
   appId: "1:329114343100:web:6a71c2a854aa3ba55b22b9",
};

const app = initializeApp(firebaseConfig);

const rtdb = getDatabase(app);

// function getMessages() {
//    onValue(ref(rtdb), (snap) => {
//       return snap.val();
//    });
// }
export { rtdb };
