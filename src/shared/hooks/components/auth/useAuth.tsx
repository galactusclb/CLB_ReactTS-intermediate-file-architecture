import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { doLogin, doSignup } from "services/auth.service";
import { RootState } from "store";
import { AuthState, authActions } from "store/authSlice";
import { handleError } from "utils/errorHandler";

const useAuth = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const dispatch = useDispatch();

	const authState = useSelector((state: RootState) => state.auth) as AuthState;

	const navigateTo = location?.state?.from?.pathname || "/";

	const isLoggedIn: boolean = !!authState.userDoc;

	const userDetails = authState?.userDoc;

	const signup = async (payload: any) => {
		const response = await doSignup(payload);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		dispatch(authActions.loginSuccess(response?.data?.data));
		navigate(navigateTo, { replace: true });
	};

	const login = async (payload: any) => {
		const response = await doLogin(payload);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		dispatch(authActions.loginSuccess(response?.data?.data));
		navigate(navigateTo, { replace: true });
	};

	return {
		login,
		signup,
		isLoggedIn,
		userDetails,
	};
};

export default useAuth;
