import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const BaseButton = styled(Link)<any>`
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 0px 5px;
	align-content: flex-end;
	max-height: 64px;
	padding: 5px 7px;
	border: 1px black solid;
    border-radius: 3px;
	color: black;
    transition: background-color 300ms;
	background-color: #8a5f44;
	&:hover {
		background-color: #614330;
		cursor: pointer;
	}
`;


const Button: React.FC<any> = ({ children, ...props }) => {
	
	return (
		<BaseButton {...props}>
            {children}
		</BaseButton>
	);
};

export default Button;
