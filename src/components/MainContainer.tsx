import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/store";
import styled from "styled-components";
import { TopNav } from "./navbar";
import { Flex } from "./flex";
import { useGetMeQuery } from "../services/worldMakerApi.service";
import authenticationService from "../utils/auth";
import { setUserData } from "../utils/slices/userSlice";

const Container = styled.main<any>`
	padding: 0;
	margin-top: 64px;
	z-index: 0;
	height: 100%;
`;

const MainContainer = ({ children, ...props }) => {
	// const {
	// 	ui: { drawerOpen },
	// } = useSelector((state: RootState) => state);
	// const dispatch = useDispatch();
	// const { data: user, isFetching, isLoading } = useGetMeQuery("639ba60904e647d358a08345")
	// useEffect(() => {
	//     dispatch(setUserData({ username: user.username, worlds: user.worlds }))
	// }, [user, isLoading])
	return <Container {...props}>{children}</Container>;
};

export default MainContainer;
