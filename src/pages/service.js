import React from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import FAQS from "@/components/FAQ/FaqsBlock";
import Faqs from "@/components/FAQ/FAQS";
import Header from "@/components/Header/Header";
import ReactDOMServer from "react-dom/server";

const Service = () => {
  const HTML = <Header/>
  return (
    <>
      <Head>
        <title>Как все - Ответы на вопросы</title>
      </Head>

      <Wrapper>
        <h1 className={'normal_title'}>
          Полезная информация<br/>для достижения цели
        </h1>
        <Faqs/>
      </Wrapper>
      {/*<dialog*/}
      {/*  style={{*/}
      {/*    border:0,*/}
      {/*    backgroundColor: 'rgba(0,0,0,0.35)',*/}
      {/*    display: "flex",*/}
      {/*    alignItems: "center",*/}
      {/*    justifyContent: "center",*/}
      {/*    position: "fixed",*/}
      {/*    top: 0,*/}
      {/*    left: 0,*/}
      {/*    zIndex: 100,*/}
      {/*    transition: '0.5s',*/}
      {/*    width: '100vw',*/}
      {/*    height: '100vh'*/}
      {/*  }}*/}
      {/*  open={false}*/}
      {/*>*/}
      {/*  <iframe*/}
      {/*    src={``}*/}
      {/*    width={'870px'}*/}
      {/*    height={'570px'}*/}
      {/*    style=*/}
      {/*      {{*/}
      {/*        borderRadius: '40px',*/}
      {/*        border: '1px solid #797979',*/}
      {/*      }}*/}
      {/*  />*/}
      {/*</dialog>*/}
    </>

  );
};

export default Service;