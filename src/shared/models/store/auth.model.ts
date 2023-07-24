import { AuthStateEnum } from "../../enums";

export interface AuthUser {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

export interface AuthInitialState {
  state: AuthStateEnum;
  user: AuthUser;
  errorMessage: string;
}