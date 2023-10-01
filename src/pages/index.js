import React from 'react';
import s from '../styles/pages/index.module.scss'
import {Wrapper} from "@/components/Wrapper/Wrapper";
import SvgSelector from "@/components/SvgSelector";

const Index = () => {
  return (
    <Wrapper>
      <h1 className={'title'}>
        Узнайте больше про обучение, трудоустройство и социализацию людей с инвалидностью в России
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

    </Wrapper>
  );
};

export default Index;