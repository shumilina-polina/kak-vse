import React, {useContext, useEffect} from 'react';
import s from '../styles/pages/index.module.scss'
import {Wrapper} from "@/components/Wrapper/Wrapper";
import SvgSelector from "@/components/SvgSelector";
import CategoryBlock from "@/components/categoryBlock/CategoryBlock";
import cs from 'classnames'
import Head from "next/head";
import cn from "classnames";
import {useQuery} from "@apollo/client";
import {GET_DATA_INDEX} from "@/services/gqlService";
import Faqs from "@/components/FAQ/FAQS";
import {Dialog, useMediaQuery} from "@mui/material";
import Link from "next/link";

import MainPageVideos from "@/components/mainPageVideos/MainPageVideos";
import {colorContext, sizeContext} from "@/components/Context";


const Index = () => {
  const {data, loading, error} = useQuery(GET_DATA_INDEX)
  const isMobile = useMediaQuery(`(max-width: 480px)`);
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  return (
    <>
      <Head>
        <title>Как все</title>
      </Head>
      <Wrapper>
        <h1 className={`${sizeVersion}_title`}>
          Узнайте больше про обучение,
          <br /> трудоустройство и социализацию людей с инвалидностью в России
        </h1>
        <MainPageVideos
          videos={data?.onMainPageVideos.data}
          loaded={loading}
          error={error}
        />
        <div className={s.first_block}>
          <div className={s.first_block_left}>
            <SvgSelector svg={`first-left-icon-${colorVersion}`} />
            <p className={`${sizeVersion}_t1`}>
              Каждый человек, независимо от его особенностей, является полноценным членом общества. Однако многие
              люди с инвалидностью до сих пор сталкиваются с проблемами в социализации, обучении
              и трудоустройстве.
            </p>
          </div>
          <div className={s.first_block_right}>
            <SvgSelector svg={`first-right-icon-${colorVersion}`} />
            <p className={`${sizeVersion}_t1`}>
              В разделах сайта вы сможете найти примеры того, как реальные люди с особыми потребностями
              добились своих достижений, где они учились, кто на этом пути их поддерживал и к кому
              вы можете обратиться.
            </p>
          </div>
        </div>
        <CategoryBlock
          Category={'opportunities'}
          VIDEO_DATA={data?.opportunitiesVideos.data}
          ARTICLE_DATA={data?.opportunitiesArticles.data}
          loaded={loading}
          error={error}
        />
        <CategoryBlock
          Category={'advices'}
          VIDEO_DATA={data?.advicesVideos.data}
          ARTICLE_DATA={data?.advicesArticles.data}
          loaded={loading}
          error={error}
        />
        <CategoryBlock
          Category={'success'}
          VIDEO_DATA={data?.successVideos.data}
          ARTICLE_DATA={data?.successArticles.data}
          loaded={loading}
          error={error}
        />
        {isMobile ? (
          <div className={s.title}>
            <div className={s.title_text}>
              <Link
                className={cn(s.link, `${colorVersion}_service_light`)}
                href={"/service"}
              >
                <p className={`${sizeVersion}_caption`}>Ответы на вопросы →</p>
              </Link>
              <SvgSelector svg={`service-${colorVersion}`} />
            </div>
            <h1 className={`${sizeVersion}_h1`}>
              Полезная информация <br /> для достижения цели
            </h1>
          </div>
        ) : (
          <div className={s.title}>
            <div className={s.title_text}>
              <Link
                className={cn(s.link, `${colorVersion}_service_light`)}
                href={"/service"}
              >
                <p className={`${sizeVersion}_caption`}>Ответы на вопросы →</p>
              </Link>
              <h1 className={`${sizeVersion}_h1`}>
                Полезная информация <br /> для достижения цели
              </h1>
            </div>
            <SvgSelector svg={`service-${colorVersion}`} />
          </div>
        )}
        <Faqs />
      </Wrapper>
    </>
  );
};

export default Index;
