import React, { useState } from "react";
import { CREATE_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import auth from "../../utils/auth";
import { Form, Button } from "react-bootstrap";


export default function SignUp() {
	const [loginData, setLoginData] = useState({
		username: "",
		email: "",
		password: "",
	});
	// const [createUser] = useMutation(CREATE_USER);

	const handleSubmit = async (event) => {
		// event.preventDefault();
		// try {
		// 	const {
		// 		data: {
		// 			createUser: { token, user },
		// 		},
		// 	} = await createUser({
		// 		variables: {
		// 			...loginData,
		// 		},
		// 	});
		// 	auth.login(token);
		// 	setLoginData({
		// 		username: "",
		// 		email: "",
		// 		password: "",
		// 	});
		// } catch (err) {
		// 	console.log(err);
		// 	alert(err);
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
}
