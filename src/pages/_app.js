import React, {useState} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/services/gqlService";
import '../styles/style.scss'
import {colorContext, sizeContext, modalIsOpen, slugContext} from "@/components/Context";

const _App = ({Component, pageProps}) => {
  const [colorVersion, setColorVersion] = useState('color')
  const [sizeVersion, setSizeVersion] = useState('normal')
  const [openModal, setOpenModal] = useState(false);
  const [slugValue, setSlugValue] = useState('')

  return (
    <>
      <modalIsOpen.Provider value={[openModal, setOpenModal]}>
        <slugContext.Provider value={[slugValue, setSlugValue]}>
          <colorContext.Provider value={[colorVersion, setColorVersion]}>
            <sizeContext.Provider value={[sizeVersion, setSizeVersion]}>
              <Header/>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
              </ApolloProvider>
              <Footer/>
            </sizeContext.Provider>
          </colorContext.Provider>
        </slugContext.Provider>
      </modalIsOpen.Provider>
    </>
  );
};

export default _App;