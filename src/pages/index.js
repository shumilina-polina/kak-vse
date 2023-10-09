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
import cn from "classnames";
import {useQuery} from "@apollo/client";
import {GET_DATA_INDEX} from "@/services/gqlService";
import Faqs from "@/components/FAQ/FAQS";
import {useMediaQuery} from "@mui/material";
import Link from "next/link";
import Markdown from "react-markdown";
import MainPageVideos from "@/components/mainPageVideos/MainPageVideos";

const Index = () => {
  const {data, loading, error} = useQuery(GET_DATA_INDEX)
  const version = useContext(VersionContext)
  const isMobile = useMediaQuery(`(max-width: 480px)`);


  return (
    <>
      <Head>
        <title>Как все</title>
      </Head>
      <Wrapper>
        <h1 className={"normal_title"}>
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
            <SvgSelector svg={"first-left-icon-color"} />
            <p className={"normal_t1"}>
              Каждый человек, независимо от его особенностей, является
              полноценным членом общества. Однако многие люди с инвалидностью до
              сих пор сталкиваются с проблемами в социализации, обучении и
              трудоустройстве.
            </p>
          </div>
          <div className={s.first_block_right}>
            <SvgSelector svg={"first-right-icon-color"} />
            <p className={"normal_t1"}>
              В разделах сайта вы сможете найти примеры того, как реальные люди
              с особыми потребностями добились своих достижений, где они
              учились, кто на этом пути их поддерживал и к кому вы можете
              обратиться.
            </p>
          </div>
        </div>
        <CategoryBlock
          Category={0}
          VIDEO_DATA={data?.advicesVideos.data}
          ARTICLE_DATA={data?.advicesArticles.data}
          loaded={loading}
          error={error}
        />
        <CategoryBlock
          Category={1}
          VIDEO_DATA={data?.opportunitiesVideos.data}
          ARTICLE_DATA={data?.opportunitiesArticles.data}
          loaded={loading}
          error={error}
        />
        <CategoryBlock
          Category={2}
          VIDEO_DATA={data?.successVideos.data}
          ARTICLE_DATA={data?.successArticles.data}
          loaded={loading}
          error={error}
        />
        {isMobile ? (
          <div className={s.title}>
            <div className={s.title_text}>
              <Link
                style={{
                  backgroundColor: "#C3FFDB",
                }}
                className={s.link}
                href={"/service"}
              >
                <p className={"normal_caption"}>Ответы на вопросы →</p>
              </Link>
              <SvgSelector svg={"service-color"} />
            </div>
            <h1 className={"normal_h1"}>
              Полезная информация <br /> для достижения цели
            </h1>
          </div>
        ) : (
          <div className={s.title}>
            <div className={s.title_text}>
              <Link
                style={{
                  backgroundColor: "#C3FFDB",
                }}
                className={s.link}
                href={"/service"}
              >
                <p className={"normal_caption"}>Ответы на вопросы →</p>
              </Link>
              <h1 className={"normal_h1"}>
                Полезная информация <br /> для достижения цели
              </h1>
            </div>
            <SvgSelector svg={"service-color"} />
          </div>
        )}
        <Faqs />
      </Wrapper>
    </>
  );
};

export default Index;
