import React, {createContext, useContext, useState} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import Faqs from "@/components/FAQ/FAQS";
import {colorContext, sizeContext} from "@/components/Context";



const Service = () => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <>
      <Head>
        <title>Как все - Ответы на вопросы</title>
      </Head>

      <Wrapper>
        <h1 className={`${sizeVersion}_title`}>
          Полезная информация<br/>для достижения цели
        </h1>
        <Faqs/>
      </Wrapper>


    </>
  );
};

export default Service;