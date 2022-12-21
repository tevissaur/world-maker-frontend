import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const BaseBanner = styled(Link)<any>`
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	max-height: 150px;
	border: 1px black solid;
    border-radius: 3px;
	color: black;
    transition: all 500ms;
	background-color: #8a5f44;
    background-image: url(${({ src }) => (src ? src : "none")});
	&:hover {
		background-color: #614330;
		cursor: pointer;
	}
`;


const Banner: React.FC<any> = ({ children, ...props }) => {
	
	return (
		<BaseBanner {...props}>
            {children}
		</BaseBanner>
	);
};

export default Banner;
