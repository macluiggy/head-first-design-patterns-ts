import Auth from "./Auth";
import AuthState from "./AuthState";

export default class LoggedOutState implements AuthState {
  auth: Auth;
  constructor(auth: Auth) {
    this.auth = auth;
  }
  login(): void {
    console.log("logging in");
    this.auth.setState(this.auth.getLoggedInState());
  }
  logout(): void {
    console.log("already logged out");
  }
}