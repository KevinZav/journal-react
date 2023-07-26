import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";


export const useAuth = () => {
  const { state } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user: any) => {
      if (!user) {
        dispatch(logout({error: ''}));
        return;
      }
      const { uid, displayName, photoUrl, email  } = user;
      const userAuth = {
        uid,
        displayName,
        photoUrl,
        email,
      };
      dispatch(login(userAuth));
    });
  }, []);

  return {
    state
  }
}
