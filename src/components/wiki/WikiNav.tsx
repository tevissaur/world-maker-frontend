import React from "react"
import styled from "styled-components"
import { Button } from "../button";
import { Flex } from "../flex"


const WikiNavContainer = styled(Flex)`
    width: 100%;
    padding: 15px;
    justify-content: space-around;
`
const WikiNavButton = styled(Button)<any>`
background-color: rgb(172, 28, 28);
&:hover {
    background-color: rgb(126, 21, 21);
}
`;

const WikiNav = () => {
    return (
    <WikiNavContainer>
<WikiNavButton>Button</WikiNavButton>
<WikiNavButton>Button</WikiNavButton>
<WikiNavButton>Button</WikiNavButton>
<WikiNavButton>Button</WikiNavButton>
<WikiNavButton>Button</WikiNavButton>
<WikiNavButton>Button</WikiNavButton>
    </WikiNavContainer>
    )
}

export default WikiNav