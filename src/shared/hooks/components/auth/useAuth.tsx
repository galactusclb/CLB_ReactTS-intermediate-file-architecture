import React from "react";
import { useDispatch } from "react-redux";

import { doLogin, doSignup } from "services/auth.service";
import { authActions } from "store/authSlice";
import { handleError } from "utils/errorHandler";

const useAuth = () => {
	const dispatch = useDispatch();

	const signup = async (payload: any) => {
		const response = await doSignup(payload);

		if (!response || !response?.success) {
			const error = response?.data?.error;
			return handleError(error?.status, error?.message);
		}

		dispatch(authActions.loginSuccess(response?.data?.data));

		//if success
		// if (response.data) {
		// 	return console.log(response.data);
		// }
		// const res = {
		// 	data: {
		// 		success: true,
		// 		data: {
		// 			userDoc: {
		// 				email: "qabuwow@mailinator.com",
		// 				userName: "hyjafav",
		// 				role: "user",
		// 				_id: "64566f53d2f8b40bdc4c23c0",
		// 				createdAt: "2023-05-06T15:16:35.144Z",
		// 				updatedAt: "2023-05-06T15:16:35.144Z",
		// 			},
		// 			refreshToken:
		// 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU2NmY1M2QyZjhiNDBiZGM0YzIzYzAiLCJ0b2tlbklkIjoiNjQ1NjZmNTNkMmY4YjQwYmRjNGMyM2MxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODMzODYxOTUsImV4cCI6MTY4NTk3ODE5NX0.95P9Cmhvp77GSTMmB2-mOVOIF4V1xIY_MQltbxjer0I",
		// 			accessToken:
		// 				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU2NmY1M2QyZjhiNDBiZGM0YzIzYzAiLCJ0b2tlbklkIjoiNjQ1NjZmNTNkMmY4YjQwYmRjNGMyM2MxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODMzODYxOTUsImV4cCI6MTY4MzM4Nzk5NX0.DGRqR1muV98zGi59i2mcIkOk7sXSGzEpMtMzjVtp4TU",
		// 		},
		// 	},
		// };

		// console.error(response.data);
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
