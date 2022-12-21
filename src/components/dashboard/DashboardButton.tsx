import React from "react";
import styled, { DefaultTheme } from "styled-components";

interface FlexProps {
    theme?: DefaultTheme;
    borders?: boolean;
    className?: string;
  }
const FlexBox = styled.div`
	display: Flex;
`;

// justify-content: ${({ justifyContent }) =>
// justifyContent ? justifyContent : null};
// align-items: ${({ alignItems }) => (alignItems ? alignItems : null)};
// flex-direction: ${({ flexDirection }) =>
// flexDirection ? flexDirection : "row"};
// margin: ${({ margin }) => (margin ? margin : 0)};
// background-color: ${({ backgroundColor }) =>
// backgroundColor ? backgroundColor : null};
// height: ${({ height }) => (height ? height : "auto")};
// width: ${({ width }) => (width ? width : "auto")};
// flex-wrap: wrap;

export const Flex: React.FC<any> = ({ children, ...props }) => <FlexBox className={props.className}>{children}</FlexBox>
