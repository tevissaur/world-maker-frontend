import React, { useEffect } from "react";
import { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../utils/slices/uiSlice";
import styled from "styled-components";
import { Flex } from "../flex";
import { homeUrl } from "../../services/constants.service";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Drawer = styled.nav<any>`
	display: flex;
	flex-direction: column;
	background-color: black;
	height: 100%;
	width: ${({ drawerOpen }) => (drawerOpen ? "240px" : 0)};
	transition: all 200ms ease-in-out;
	& > a {
		width: ${({ drawerOpen }) => (drawerOpen ? "90%" : "0")};
		border-radius: 5px;
	}
`;
const DrawerButton = styled(Link)<any>`
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px 5px;
	background-color: gray;
	padding: 5px;
	border: 1px black solid;
	color: black;
	width: ${({ drawerOpen }) => (drawerOpen ? "90%" : "0")};
	transition: all 400ms ease;
	&:hover {
		background-color: darkgreen;
		cursor: pointer;
	}
`;

const SideDrawer: React.FC<any> = ({ children, ...props }) => {
	const {
		ui: { drawerOpen },
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	return (
		<Drawer drawerOpen={drawerOpen} flexDirection={"column"}>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
			<DrawerButton>HOME</DrawerButton>
		</Drawer>
	);
};

export default SideDrawer;
