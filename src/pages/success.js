import React, {useContext} from 'react';
import {Wrapper} from "@/components/Wrapper/Wrapper";
import Head from "next/head";
import {ARTICLE, VIDEO} from "@/shared/data";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import {useQuery} from "@apollo/client";
import {GET_CATEGORY} from "@/services/gqlService";
import {colorContext, sizeContext} from "@/components/Context";

const Success = () => {
  const { data, loading, error} = useQuery(GET_CATEGORY, {
    variables: {category: "success"}
  })
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <>
      <Head>
        <title>Как все - Истории успеха</title>
      </Head>
      <Wrapper>
        <h1 className={`${sizeVersion}_title`}>
          Найди вдохновение<br/> в историях успеха
        </h1>
        <CategoryPage
          Category={2}
          VIDEO_DATA={data?.categoryVideos.data}
          ARTICLE_DATA={data?.categoryArticles.data}
        />
      </Wrapper>
    </>

  );
};

export default Success;