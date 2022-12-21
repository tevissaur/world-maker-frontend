import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import WorldRouter from "./WorldRouter";
import { myTheme } from "./utils/theme";

export const client = new ApolloClient({
	uri: "/graphql",
	// uri: 'https://world-maker-api.herokuapp.com/graphql',
	cache: new InMemoryCache({
		resultCaching: true,
	}),
});

const App: React.FC = () => (
	<ApolloProvider client={client}>
		<ThemeProvider theme={myTheme}>
			<WorldRouter />
		</ThemeProvider>
	</ApolloProvider>
);

export default App;
