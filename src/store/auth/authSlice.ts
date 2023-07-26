import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "../../shared";
import { AuthStateEnum } from "../../shared/enums";


const initialState: AuthInitialState = {
  state: AuthStateEnum.CHECKING,
  user: {
    uid: '',
    displayName: '',
    email: '',
    photoURL: ''
  },
  errorMessage: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, payload) => {
      state.state = AuthStateEnum.AUTHENTICATED;
      state.user = payload.payload;
      state.errorMessage = '';
    },
    logout: (state, payload) => {
      state.errorMessage = payload.payload.error;
      state.state = AuthStateEnum.NOT_AUTHENTICATED;
      state.user = initialState.user;
    },
    checkingCredentias: (state) => {
      state.state = AuthStateEnum.CHECKING;
    },
    setNotAuthenticated: (state) => {
      state.state = AuthStateEnum.NOT_AUTHENTICATED;
    }
  }
})

export const { login, logout, checkingCredentias, setNotAuthenticated } = authSlice.actions