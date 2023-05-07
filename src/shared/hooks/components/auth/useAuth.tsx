import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { doLogin, doSignup } from "services/auth.service";
import { RootState } from "store";
import { AuthState, authActions } from "store/authSlice";
import { handleError } from "utils/errorHandler";

const useAuth = () => {
	const dispatch = useDispatch();

	const authState = useSelector((state: RootState) => state.auth) as AuthState;

	const isLoggedIn: boolean = !!authState.userDoc;

	const userDetails = authState?.userDoc;

	const signup = async (payload: any) => {
		const response = await doSignup(payload);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		dispatch(authActions.loginSuccess(response?.data?.data));
	};

	const login = async (payload: any) => {
		const response = await doLogin(payload);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		dispatch(authActions.loginSuccess(response?.data?.data));
	};

	return {
		login,
		signup,
		isLoggedIn,
		userDetails,
	};
};

export default useAuth;
