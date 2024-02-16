// Import needed functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2YXcZ_tPREzGWN0d_jBgRCyWiRpLuyeA",
  authDomain: "gdscsolutiontest.firebaseapp.com",
  projectId: "gdscsolutiontest",
  storageBucket: "gdscsolutiontest.appspot.com",
  messagingSenderId: "420612382822",
  appId: "1:420612382822:web:3535449a44da61da1fcda7",
  measurementId: "G-19QK2R9GEY"
};

const app = initializeApp(firebaseConfig);
// Get Firestore database from the app
const dataBase = getFirestore(app);

for (let i = 0; i < 5; i++) {
  // Add new document which contains a collection of users
  let muhammad = await addDoc(collection(dataBase, 'users'), {
    first: 'Muhammad',
    last: 'Elsayed',
    born: 2005
  });
  console.log(i, ' - added data to firestore with id ', muhammad.id);
}