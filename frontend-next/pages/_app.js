import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/base.less";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql", // @TODO: env var process.env.API
    cache: new InMemoryCache(),
});

const App = ({ Component, pageProps }) => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
