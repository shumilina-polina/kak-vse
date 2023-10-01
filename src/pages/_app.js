import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/services/gqlService";
import '../styles/style.scss'

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