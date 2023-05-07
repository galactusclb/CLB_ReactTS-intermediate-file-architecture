import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AdminRoutes from "routes/admin.routes";
import Header from "./components/Header";
import { RouteType } from "@models/Route.model";
import useAuth from "shared/hooks/components/auth/useAuth";
import useRouteGenerator from "shared/hooks/useRouteGenerator";

const AdminLayout = () => {
	const { isLoggedIn } = useAuth();

	const location = useLocation();

	const { getRoutes } = useRouteGenerator();

	return !isLoggedIn ? (
		<Navigate to="/login" state={{ from: location }} replace />
	) : (
		<div className="container-fluid">
			<Header />
			<div className="mt-5">
				<Routes>
					{getRoutes(AdminRoutes, location?.pathname)}
					{/* <Route path="*" element={<Navigate to="/feedbacks" replace />} /> */}
				</Routes>
			</div>
		</div>
	);
};

export default AdminLayout;
