import React from "react"
import { WikiNav, WikiMain, WikiAside, WikiFooter } from "../../components/wiki"
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Flex } from "../../components/flex";

const WikiContainer = styled(Flex)`
    flex-direction: column;
    width: 100%;
    background-color: brown;
`


const WikiPageLayout = () => {



    return (
        <WikiContainer>
            <WikiNav />
            <WikiMain />
            <WikiAside />
            <WikiFooter />
        </WikiContainer>
    )
}


export default WikiPageLayout