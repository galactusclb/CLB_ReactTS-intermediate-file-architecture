import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "shared/hooks/components/auth/useAuth";

type Inputs = {
	email: string;
	userName: string;
	password: string;
};

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();

	const { signup } = useAuth();

	const onSubmit: SubmitHandler<Inputs> = (data) => signup(data);

	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-5 mx-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								{...register("email", {
									required: {
										value: true,
										message: "Email is required",
									},
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Entered email does not match email format",
									},
								})}
							/>
							{errors.email && <span role="alert">{errors.email.message}</span>}
						</div>
						<div className="mb-3">
							<label htmlFor="userName1" className="form-label">
								User name
							</label>
							<input
								type="text"
								className="form-control"
								id="userName1"
								aria-describedby="usernameHelp"
								{...register("userName", {
									required: {
										value: true,
										message: "User name is required",
									},
									pattern: {
										value: USER_REGEX,
										message: "Entered user name does not match format",
									},
								})}
							/>
							{errors.userName && (
								<span role="alert">{errors.userName.message}</span>
							)}
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								{...register("password", {
									required: {
										value: true,
										message: "Password is required",
									},
									pattern: {
										value: PASSWORD_REGEX,
										message: "Password is not valid",
									},
								})}
							/>
							{errors.password && <span>{errors?.password?.message}</span>}
						</div>
						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
