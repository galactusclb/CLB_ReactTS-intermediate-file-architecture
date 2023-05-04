import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const user = {};

	return (
		<header>
			<nav className="navbar  fixed-top navbar-expand-lg navbar-light bg-dark p-2 text-white">
				<div className="container-fluid text-white">
					<a className="navbar-brand text-white" href="/">
						Laflamingo
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse text-white"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
							<li className="nav-item text-white">
								<Link
									className="nav-link active text-white"
									aria-current="page"
									to="/"
								>
									HOME
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link active text-white"
									aria-current="page"
									to="/appointments"
								>
									FACILITIES
								</Link>
							</li>

							{user && (
								<li className="nav-item">
									<Link
										className="nav-link active text-white"
										to="registercompany"
									>
										BOOK NOW
									</Link>
								</li>
							)}

							<li className="nav-item">
								<Link className="nav-link active text-white" to="/notices">
									NOTICES
								</Link>
							</li>
						</ul>
						<div className="d-flex">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
								{user && (
									<>
										<li className="nav-item">
											<Link
												className="nav-link active text-white me-2"
												aria-current="page"
												to="/admin/feedbacks"
											>
												Dashboard
											</Link>
										</li>
										<li className="nav-item">
											<Link
												className="nav-link active text-white me-2"
												aria-current="page"
												to="/Profile"
											>
												{user.email}
											</Link>
										</li>
										<li className="nav-item">
											<button
												className="btn btn-warning text-white"
												onClick={() => {}}
											>
												Logout
											</button>
										</li>
									</>
								)}

								{!user && (
									<>
										{" "}
										<li className="nav-item">
											<Link
												className="btn btn-warning text-white me-2"
												aria-current="page"
												to="/login"
											>
												Login
											</Link>
										</li>
										<li className="nav-item">
											<Link className="btn btn-warning text-white" to="/signup">
												Sign Up
											</Link>
										</li>
									</>
								)}
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
