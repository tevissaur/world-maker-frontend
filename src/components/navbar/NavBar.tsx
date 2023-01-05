import React from "react";
import { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../utils/slices/uiSlice";
import styled from "styled-components";
import { Flex } from "../flex";
import { dashboardUrl, homeUrl, signInUrl, signUpUrl, wikiUrl } from "../../utils/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../button";


const NavBar = styled.nav<any>`
	display: flex;
	position: fixed;
	top: 0;
	background-color: ${({ theme }) => (theme.colors.dark.primary)};
	padding: 10px;
	align-content: center;
	height: 33px;
	width: 100%;
`;
const NavButton = styled(Button)<any>`
	background-color: ${({ theme }) => (theme.colors.light.secondary)};
	&:hover {
		background-color: ${({ theme }) => (theme.colors.light.tertiary)};
	}
`;
const HamburgerButton = styled(Flex)<any>`
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	padding: 2px 6px;
	margin: 0 10px 0 5px;
	border: 1px black solid;
	justify-self: center;
	align-items: center;
    transition: all 300ms;
	background-color: ${({ theme }) => (theme.colors.dark.tertiary)};
	&:hover {
		background-color: ${({ theme }) => (theme.colors.white)};
		cursor: pointer;
	}
`;

const TopNav: React.FC<any> = () => {
	const {
		ui: { drawerOpen },
	} = useSelector((state: RootState) => state);
	const state = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	return (
		<NavBar drawerOpen={drawerOpen}>
			<HamburgerButton
				onClick={() => {
					console.log(state);
					return dispatch(toggleDrawer());
				}}
			>
				<AiOutlineMenu />
			</HamburgerButton>
			<NavButton to={homeUrl}>Home</NavButton>
			<NavButton to={dashboardUrl}>Features</NavButton>
			<NavButton to={wikiUrl}>Browse</NavButton>
		</NavBar>
	);
};

export default TopNav;
