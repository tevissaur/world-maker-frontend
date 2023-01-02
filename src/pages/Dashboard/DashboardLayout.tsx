
import React from "react"
import { Outlet } from 'react-router-dom'
import { SideDrawer } from "../../components/drawer";
import { Flex } from "../../components/flex";
import MainContainer from "../../components/MainContainer";


const Dashboard = () => {

    return (        
    <Flex>
        <MainContainer>
            <Outlet />
        </MainContainer>
    </Flex>);
}


export default Dashboard