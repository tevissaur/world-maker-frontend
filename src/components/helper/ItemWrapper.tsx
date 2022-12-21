import React from "react";

export const PageItemWrapper: React.FC<any> = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};
