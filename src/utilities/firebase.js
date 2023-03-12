import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { collection, doc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyD951GXn2hqsTGoaFWW8SKNIU_3X_EElbo",
    authDomain: "chorezone.firebaseapp.com",
    projectId: "chorezone",
    storageBucket: "chorezone.appspot.com",
    messagingSenderId: "258708490886",
    appId: "1:258708490886:web:c6185cc8cb0be8d78e9f07"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const db = getFirestore();

export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
};

export const getUser = async (email) => {
    const collectionRef = collection(db, 'users')
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
}

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, `users/${userAuth.email}`);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            alert(error);
        }
    }
    return userSnapshot;
};

export const signOutUser = async () => await signOut(auth);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return (await createUserWithEmailAndPassword(auth, email, password)).user;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);