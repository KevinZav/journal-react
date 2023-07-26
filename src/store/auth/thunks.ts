import { Dispatch } from 'react';
import { checkingCredentias, login, logout } from './authSlice';
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';

export const startGoogleSignIn = (): any => {
  return async (dispatch: Dispatch<any>, _: any) => {
    dispatch(checkingCredentias());

    const { success, ...data } = await signInWithGoogle();
    console.log(success, data);
    if (success) {
      dispatch(login(data));
    } else {
      dispatch(logout(data));
    }
  };
};

export const startCreateUserWithEmailPassword = (
  email: string,
  password: string,
  displayName: string
): any => {
  return async (dispatch: Dispatch<any>, _: any) => {
    dispatch(checkingCredentias());
    const { success, ...data } = await registerUserWithEmailPassword({ email, password, displayName });
    if (!success) {
      dispatch(logout(data))
    } else {
      dispatch(login(data));
    }
  };
};


export const startSignWithEmailPassword = (email: string, password: string): any => {
  return async (dispatch: Dispatch<any>, _: any) => {
    dispatch(checkingCredentias());
    const { success, ...data } = await loginWithEmailPassword(email, password);
    if (!success) {
      dispatch(logout(data));
    } else {
      dispatch(login(data));
    }
  }
}

export const startLogout = (): any => {
  return async (dispatch: Dispatch<any>, _:any) => {
    await logoutFirebase()

    dispatch(logout({error: ''}));
  }
}