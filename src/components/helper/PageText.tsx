import React from "react";

export const PageText: React.FC<any> = ({ className, children }) => {
	return <span className={className}>{children}</span>;
};
