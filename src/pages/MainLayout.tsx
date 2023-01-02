import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import auth from "../utils/auth";
import store, { RootState } from "../utils/store";
import { useDispatch, useSelector } from "react-redux";
import { setOpenWorld, updateWorlds } from "../utils/slices/worldSlice";
import { World } from "../interfaces/IWorld";
import { useGetSingleSubjectQuery } from "../services/worldMakerApi.service";
import { setUserData } from "../utils/slices/userSlice";
import { Outlet } from "react-router-dom";
import { Flex } from "../components/flex";
import { SideDrawer } from "../components/drawer";
import MainContainer from "../components/MainContainer";
import { TopNav } from "../components/navbar";
import styled from "styled-components";

const SiteContainer = styled(Flex)`
	height: 100%;
	width: 100%;
	
`


const MainLayout = () => {
	// const { data: { _id } } = auth.getProfile()
	// const { ui: { drawerOpen } } = useSelector((state: RootState) => state)
	// const dispatch = useDispatch()
	// const { data, isLoading, isError } = useGetSingleSubjectQuery({ _id, 'User' })

	// useEffect(() => {
	//     // if (!isLoading && !isError && data !== null) {
	//     //     dispatch(updateWorlds(data.worlds))
	//     //     dispatch(setUserData(data))
	//     //     dispatch(setOpenWorld(data.worlds[0]))
	//     // }
	// }, [data, isLoading, isError])

	// useEffect(() => {
	//     console.log(state)
	// }, [drawerOpen, state])

	return (
		<SiteContainer>
			<SideDrawer />
			<MainContainer>
				<TopNav />
				<Outlet />
			</MainContainer>
		</SiteContainer>
	);
};

export default MainLayout;
