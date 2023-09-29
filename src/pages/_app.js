import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/services/gqlService";

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <Header/>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      <Footer/>
    </>
  );
};

export default _App;