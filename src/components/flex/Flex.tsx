import React, { useEffect } from "react";
import styled from "styled-components";

const FlexBox = styled.div<any>`
	display: flex;
	justify-content: ${({ justifyContent }) =>
		justifyContent ? justifyContent : null};
	align-items: ${({ alignItems }) => (alignItems ? alignItems : null)};
	flex-direction: ${({ flexDirection }) =>
		flexDirection ? flexDirection : "row"};
	margin: ${({ margin }) => (margin ? margin : 0)};
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : null};
	height: ${({ height }) => (height ? height : "auto")};
	width: ${({ width }) => (width ? width : "auto")};
	flex-wrap: wrap;
`;

const Flex: React.FC<any> = ({ children, ...props }) => {
	return <FlexBox {...props}>{children}</FlexBox>;
};

export default Flex