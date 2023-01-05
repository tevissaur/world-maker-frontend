import React, { PropsWithChildren, useEffect } from "react";
import { RootState } from "../../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../utils/slices/uiSlice";
import styled from "styled-components";
import { Flex } from "../flex";
import { homeUrl } from "../../utils/constants";
import { Link } from "react-router-dom";

const Drawer = styled(Flex)<any>`
	top: 0;
	flex-direction: column;
	background-color: ${({ theme }) => (theme.colors.light.primary)};
	height: 100vh;
	width: ${({ drawerOpen, theme }) => (drawerOpen ? theme.drawerWidth : 0)};
	transition: all 200ms ease-in-out;
	overflow: hidden;
`;

const DrawerButton = styled(Link)<any>`
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	background-color: ${({ theme }) => (theme.colors.dark.secondary)};
	padding: 5px;
	border: 1px black;
	border-style: none none solid none;
	color: black;
	transition: all 200ms ease-in-out;
	width: 100%;
	&:hover {
		background-color: ${({ theme }) => (theme.colors.light.secondary)};
		cursor: pointer;
	}
`;

const DrawerHeader = styled.div<any>`
	height: 64px;
`;

const DrawerLabel = styled.label<any>`
	color: ${({ theme }) => (theme.colors.white)};
	padding: 0 10px 5px;
	font-size: 18px;
	font-family: ${({ theme }) => (theme.fontFamily)};
`;

const DrawerGroup = styled(Flex)<any>`
	flex-direction: column;
	width: 100%;
	margin: 5px 0;
`;

const DrawerWorldSelector = styled.select`
	width: 95%;
	margin: auto;
`;

const SideDrawer: React.FC<PropsWithChildren> = ({ children, ...props }) => {
	const {
		ui: { drawerOpen },
	} = useSelector((state: RootState) => state);
	const dispatch = useDispatch();

	return (
		<Drawer drawerOpen={drawerOpen} flexDirection={"column"}>
			<DrawerHeader />
			<DrawerGroup>
				<DrawerLabel>World</DrawerLabel>
				<DrawerWorldSelector />
			</DrawerGroup>
			<DrawerGroup>
				<DrawerLabel>Create</DrawerLabel>
				<DrawerButton>Character</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
			</DrawerGroup>
			<DrawerGroup>
				<DrawerLabel>Tools</DrawerLabel>
				<DrawerButton>Character</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
				<DrawerButton>HOME</DrawerButton>
			</DrawerGroup>
		</Drawer>
	);
};

export default SideDrawer;
