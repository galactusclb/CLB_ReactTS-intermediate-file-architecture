import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminRoutes from "routes/admin.routes";
import Header from "./components/Header";
import { RouteType } from "@models/Route.model";
import { RootState } from "store";
import { AuthState } from "store/authSlice";
import useAuth from "shared/hooks/components/auth/useAuth";

const AdminLayout = () => {
	const { isLoggedIn } = useAuth();

	const location = useLocation();

	const authState = useSelector((state: RootState) => state.auth) as AuthState;

	const getRoutes = (routes: RouteType[]) => {
		return routes.map((prop, key) => {
			const Element = prop?.component;
			return (
				<Route
					path={prop.path}
					element={
						prop?.redirectTo ? (
							<Navigate to={prop?.redirectTo} />
						) : Element ? (
							<Element />
						) : null
					}
					key={key}
				/>
			);
		});
	};

	return !isLoggedIn() ? (
		<Navigate to="/register" state={{ from: location }} replace />
	) : (
		<div className="container-fluid">
			<Header />
			<div className="mt-5">
				{authState.refreshToken}
				<Routes>
					{getRoutes(AdminRoutes)}
					<Route path="*" element={<Navigate to="/feedbacks" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default AdminLayout;
