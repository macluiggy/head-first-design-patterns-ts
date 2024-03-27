import AuthState from "./AuthState";
import LoggedInState from "./LoggedInState";
import LoggedOutState from "./LoggedOutState";

export default class Auth {
  state: AuthState;
  loggedInState: LoggedInState;
  loggedOutState: LoggedOutState;

  constructor() {
    this.loggedInState = new LoggedInState(this);
    this.loggedOutState = new LoggedOutState(this);
    this.state = this.loggedOutState;
  }

  login(): void {
    this.state.login();
  }
  logout(): void {
    this.state.logout();
  }
  setState(state: AuthState): void {
    this.state = state;
  }
  getLoggedInState(): LoggedInState {
    return this.loggedInState;
  }
  getLoggedOutState(): LoggedOutState {
    return this.loggedOutState;
  }
}

const auth = new Auth();
auth.login();
auth.logout();
auth.logout();
auth.login();
auth.login();