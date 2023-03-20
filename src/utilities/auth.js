// auth.js
import { auth } from './firebase';

const history = history();
export const handleSignIn = async(email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // If sign-in is successful, redirect to the dashboard
      history.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };