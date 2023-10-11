import React, {createContext, useContext, useState} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import Faqs from "@/components/FAQ/FAQS";
import {colorContext, sizeContext, modalIsOpen, slugContext} from "@/components/Context";
import {Dialog} from "@mui/material";
import AnswerComponent from "@/components/answerComponent/Answer";


const Service = () => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  const [openModal, setOpenModal] = useContext(modalIsOpen)
  const [slugValue, setSlugValue] = useContext(slugContext)
  const handleClose = () => {
    setOpenModal(false);
  };
  console.log(openModal, slugValue)
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
      <Dialog
        open={openModal}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
      >
        <AnswerComponent id={slugValue}/>
      </Dialog>

    </>
  );
};

export default Service;