import { createSlice } from "@reduxjs/toolkit";
import { AuthInitialState } from "../../shared";
import { AuthStateEnum } from "../../shared/enums";


const initialState: AuthInitialState = {
  state: AuthStateEnum.NOT_AUTHENTICATED,
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
    login: (state) => {
      console.log(state)
    },
    logout: (state, payload) => {
      console.log(state, payload)
    },
    checkingCredentias: (state) => {
      console.log(state)
    }
  }
})

export const { login, logout, checkingCredentias } = authSlice.actions