// use this to decode a token and get the user's information out of it
import decode, { JwtPayload } from "jwt-decode";
import { IAuthToken } from "../interfaces/IUser";

// create a new class to instantiate for a user
class AuthService {
	// get user data
	getProfile() {
		try {
			return decode<IAuthToken>(this.getToken());
		} catch (err) {
			window.alert(err);
			return { data: { _id: "" } };
		}
	}

	// check if user's logged in
	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token); // handwaiving here
	}

	// check if token is expired
	isTokenExpired(token: string) {
		try {
			const decoded = decode<IAuthToken>(token);

			if (decoded.data.exp < Date.now() / 1000) return true;
			return false;
      
		} catch (err) {
			return false;
		}
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem("id_token") || "";
	}

	login(idToken: string) {
		// Saves user token to localStorage
		localStorage.setItem("id_token", idToken);
		window.location.assign("/dashboard");
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem("id_token");
		// this will reload the page and reset the state of the application
		window.location.assign("/");
	}
}

export default new AuthService();
