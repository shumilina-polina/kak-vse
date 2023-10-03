import React, {useContext} from 'react';
import s from '../styles/pages/index.module.scss'
import {Wrapper} from "@/components/Wrapper/Wrapper";
import SvgSelector from "@/components/SvgSelector";
import CardVideo from "@/components/cardVideo/CardVideo";
import {VIDEO, ARTICLE} from "@/shared/data";
import CardArticle from "@/components/cardArticle/CardArticle";
import CategoryBlock from "@/components/categoryBlock/CategoryBlock";
import cs from 'classnames'
import Head from "next/head";
import {VersionContext} from "@/components/Context";



const Index = () => {

  const version = useContext(VersionContext)

  const load = false
  return (
    <>
      <Head>
        <title>Как все</title>
      </Head>
      <div style={{
        width: '100%',
        height: '200vh'
      }}>

      </div>
    </>


  );
};

export default Index;