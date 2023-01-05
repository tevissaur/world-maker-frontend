import React, { useState } from "react";
import { LOG_IN } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import { Form, Button } from "react-bootstrap";


const LogIn = () => {
	// const [loginData, setLoginData] = useState({
	// 	email: "",
	// 	password: "",
	// });
	// const [login] = useMutation(LOG_IN);

	const handleSubmit = async (event) => {
		// event.preventDefault();
		// // eslint-disable-next-line no-console
		// try {
		// 	const {
		// 		data: {
		// 			login: { token, user },
		// 		},
		// 	} = await login({
		// 		variables: {
		// 			...loginData,
		// 		},
		// 	});
		// 	auth.login(token);
		// } catch (err) {
		// 	console.log(err);
		// }
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
				<Form.Text className="text-muted">
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default LogIn;
