import React from "react";
import { doLogin, doSignup } from "services/auth.service";

const useAuth = () => {
	const signup = async (payload: any) => {
		const response = await doSignup(payload);

		if (response.data) {
			return console.log(response.data);
		}

		console.error(response.data);
	};

	const login = async (payload: any) => {
		const response = await doLogin(payload);

		if (response.data) {
			return console.log(response.data);
		}

		console.error(response.data);
	};

	return {
		login,
		signup,
	};
};

export default useAuth;
