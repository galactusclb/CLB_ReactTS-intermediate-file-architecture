import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import AdminRoutes from "routes/admin.routes";
import Header from "./components/Header";
import { RouteType } from "@models/Route.model";

const AdminLayout = () => {
	const [isNavigationMenuOpen, setNavigationMenuOpen] = useState(true);

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
					{getRoutes(AdminRoutes)}
					<Route path="*" element={<Navigate to="/feedbacks" replace />} />
				</Routes>
			</div>
		</div>
	);
};

export default AdminLayout;
