import React from 'react';
import s from './header.module.scss'
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import {Elsie} from "next/dist/compiled/@next/font/dist/google";
import Ellipse from "@/components/Ellipse/Ellipse";
const Header = () => {
  return (
    <div className={s.header}>

      <div className={s.logo}>
        <SvgSelector svg={"logo"} />
      </div>

      <div className={s.tabs}>
        <Link
          href={'/'}
          className={s.link}
        >
          <Ellipse color={'#FFADDE'} size={32}/>
          <p>Ваши возможности</p>
        </Link>

        <Link
          href={'/'}
          className={s.link}
        >
          <Ellipse color={'#A7EAFF'} size={32}/>
          <p>Ваши возможности</p>
        </Link>

        <Link
          href={'/'}
          className={s.link}
        >
          <Ellipse color={'#FFECA7'} size={32}/>
          <p>Ваши возможности</p>
        </Link>

        <Link
          href={'/'}
          className={s.link}
        >
          <Ellipse color={'#A7FFCA'} size={32}/>
          <p>Ваши возможности</p>
        </Link>

      </div>

      <div className={s.unvisually}>
        <p>Версия для<br/>слабовидящих</p>
        <SvgSelector svg={'unvisually'} />
      </div>

    </div>
  );
};

export default Header;