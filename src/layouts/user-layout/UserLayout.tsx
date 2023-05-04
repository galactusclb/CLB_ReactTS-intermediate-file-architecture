import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import UserRoutes from "routes/user.routes";
import Header from "./components/Header";
import { RouteType } from "@models/Route.model";

const UserLayout = () => {
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

	return (
		<div className="container-fluid">
			<Header />

			<div className="mt-5">
				<Routes>
					{getRoutes(UserRoutes)}
					<Route path="*" element={<Navigate to="/notices" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default UserLayout;
