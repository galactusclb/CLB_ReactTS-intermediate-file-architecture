import React from "react";
import { Navigate, Route } from "react-router-dom";

import { RouteType } from "@models/Route.model";

const useRouteGenerator = () => {
	const getRoutes = (
		routes: RouteType[],
		currentPath?: string,
		bypassPath?: string
	) => {
		//? bypassPath => looks like this : getRoutes(AdminRoutes,undefined, "/admin")

		return routes.map((prop, key) => {
			const Element = prop?.component;
			return (
				<Route
					path={prop.path}
					element={
						prop?.redirectTo ? (
							bypassPath ? (
								<Navigate to={bypassPath + prop?.redirectTo} />
							) : (
								<Navigate to={navigatePath(currentPath, prop?.redirectTo)} />
							)
						) : Element ? (
							<Element />
						) : null
					}
					key={key}
				/>
			);
		});
	};

	const navigatePath = (currentPath?: string, navigateTo?: string) => {
		const normalizedCurrentPath = currentPath?.endsWith("/")
			? currentPath
			: `${currentPath}/`;

		const parentPath = normalizedCurrentPath.substring(
			0,
			normalizedCurrentPath.lastIndexOf("/")
		);
		const finalPath = `${parentPath}${navigateTo}`;

		return finalPath;
	};

	return {
		getRoutes,
	};
};

export default useRouteGenerator;
