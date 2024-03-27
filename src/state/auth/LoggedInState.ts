import Auth from "./Auth";
import AuthState from "./AuthState";

export default class LoggedInState implements AuthState {
  auth: Auth;
  constructor(auth: Auth) {
    this.auth = auth;
  }
  login(): void {
    console.log("already logged in");
  }
  logout(): void {
    console.log("logging out");
    this.auth.setState(this.auth.getLoggedOutState());
  }
}
