import {initializeApp} from 'firebase/app'
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDqiDFkj89I-q04xFgknGdhQEU9iBxgzbs",
  authDomain: "foodcart-36b04.firebaseapp.com",
  projectId: "foodcart-36b04",
  storageBucket: "foodcart-36b04.firebasestorage.app",
  messagingSenderId: "92652648068",
  appId: "1:92652648068:web:920127b859a791f46634d1",
  measurementId: "G-8KC21XQC5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additonalInfo= {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additonalInfo
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email , password) => {
    if (!email || !password) return
    const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential;
}



