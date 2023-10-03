import React, {createContext} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ApolloProvider} from "@apollo/client";
import { client } from "@/services/gqlService";
import '../styles/style.scss'
import {VersionContext} from "@/components/Context";

const _App = ({ Component, pageProps }) => {
  return (
    <>
      <VersionContext.Provider value={{color: 'color', size: 'normal'}}>
          <Header/>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
          <Footer/>
      </VersionContext.Provider>

    </>
  );
};

export default _App;