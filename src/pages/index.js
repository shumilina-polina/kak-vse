import React from 'react';
import s from '../styles/pages/index.module.scss'
import {Wrapper} from "@/components/Wrapper/Wrapper";
import SvgSelector from "@/components/SvgSelector";
import CardVideo from "@/components/cardVideo/CardVideo";
import {VIDEO, ARTICLE} from "@/shared/data";
import CardArticle from "@/components/cardArticle/CardArticle";

const Index = () => {
  const load = false
  return (
    <Wrapper>
      <title>Узнайте больше про обучение, трудоустройство и социализацию людей с инвалидностью в России</title>
      <h1 className={'title'}>
        Узнайте больше про обучение, трудоустройство и социализацию людей с инвалидностью в России
      </h1>
      {/*image*/}
      <div className={s.first}>
        <div className={s.first_left}>
          <SvgSelector svg={'first-left-icon'}/>
          <p className={'t1'}>
            Каждый человек, независимо от его особенностей, является полноценным членом общества. Однако многие люди с
            инвалидностью до сих пор сталкиваются с проблемами в социализации, обучении и трудоустройстве.
          </p>
        </div>
        <div className={s.first_right}>
          <SvgSelector svg={'first-right-icon'}/>
          <p className={'t1'}>
            В разделах сайта вы сможете найти примеры того, как реальные люди с особыми потребностями добились своих
            достижений, где они учились, кто на этом пути их поддерживал и к кому вы можете обратиться.
          </p>
        </div>
      </div>
      <CardVideo
        Category={0}
        tags={VIDEO[0].tags}
        title={VIDEO[0].title}
        url={VIDEO[0].url}
        loaded={load}
      />
      <CardArticle
        Category={ARTICLE[0].Category}
        author={ARTICLE[0].author}
        image={ARTICLE[0].image}
        title={ARTICLE[0].title}
        previewText={ARTICLE[0].previewText}
        url={ARTICLE[0].url}
        loaded={load}
      />
    </Wrapper>
  );
};

export default Index;