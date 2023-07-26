import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from './config';
import { SignFirebaseModel } from '../shared/models/data/signFirebase.model';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<SignFirebaseModel> => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);

    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    const { displayName, email, photoURL, uid } = user;

    return {
      success: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: SignFirebaseModel): Promise<SignFirebaseModel> => {
  try {
    const resp = await createUserWithEmailAndPassword(
      firebaseAuth,
      email as string,
      password as string
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(firebaseAuth.currentUser!, { displayName });
    return {
      success: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      success: false,
      error: errorMessage,
    };
  }
};

export const loginWithEmailPassword = async (
  emailUser: string,
  password: string
): Promise<SignFirebaseModel> => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, emailUser, password);
    const { uid, displayName, photoURL } = resp.user;

    return {
      success: true,
      uid,
      displayName,
      photoURL,
    };
  } catch (error: any) {
    const errorMessage = error.message;
    return {
      success: false,
      error: errorMessage,
    };
  }
};


export const logoutFirebase = async () => {
  return await firebaseAuth.signOut(); 
}
