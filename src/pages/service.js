import React, {useContext} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import FAQS from "@/components/FAQ/FaqsBlock";
import Faqs from "@/components/FAQ/FAQS";
import Header from "@/components/Header/Header";
import ReactDOMServer from "react-dom/server";
import {colorContext, sizeContext} from "@/components/Context";
import {Dialog, useTheme} from "@mui/material";

const Service = () => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();


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
        open={open}
        aria-labelledby="responsive-dialog-title"
      >
        <h1>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </h1>


        {/*<button autoFocus onClick={handleClose}>*/}
        {/*  Disagree*/}
        {/*</button>*/}
        {/*<button onClick={handleClose} autoFocus>*/}
        {/*  Agree*/}
        {/*</button>*/}

      </Dialog>
    </>

  );
};

export default Service;