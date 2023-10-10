import React, {useState} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/services/gqlService";
import '../styles/style.scss'
import {colorContext, sizeContext} from "@/components/Context";

const _App = ({Component, pageProps}) => {
  const [colorVersion, setColorVersion] = useState('color')
  const [sizeVersion, setSizeVersion] = useState('normal')
  return (
    <>
      <colorContext.Provider value={[colorVersion, setColorVersion]}>
        <sizeContext.Provider value={[sizeVersion, setSizeVersion]}>
          <Header/>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
          <Footer/>
        </sizeContext.Provider>
      </colorContext.Provider>

    </>
  );
};

export default _App;