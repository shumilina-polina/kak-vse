import React, {useState} from 'react';
import s from './header.module.scss'
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Ellipse from "@/components/Ellipse/Ellipse";
import {Button} from "@mui/material";

const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <header className={s.wrapper}
      style={{
        height: show ? '100px;' : '180px;',
      }}
    >

      <div className={s.die}>

      </div>

      <div className={s.header}>
        <Link href={'/'} className={s.logo}>
          <SvgSelector svg={"logo"}/>
        </Link>

        <div className={s.tabs}>
          <Link
            href={'/opportunities'}
            className={s.link}
          >
            <SvgSelector svg={'link-opportunities'}/>
            <p>Ваши возможности</p>
          </Link>

          <Link
            href={'/advices'}
            className={s.link}
          >
            <SvgSelector svg={'link-advices'}/>
            <p>Полезные советы</p>
          </Link>

          <Link
            href={'/success'}
            className={s.link}
          >
            <SvgSelector svg={'link-success'}/>
            <p>Истории успеха</p>
          </Link>

          <Link
            href={'/service'}
            className={s.link}
          >
            <Ellipse color={'#A7FFCA'} size={32}/>
            <p>Ответы на впоросы</p>
          </Link>

        </div>

        <div className={s.unvisually}>
          <p>Версия для<br/>слабовидящих</p>
          <Button onClick={(e) =>{setShow(!show)}}>
            <SvgSelector svg={'unvisually'}/>
          </Button>

        </div>

      </div>
    </header>

  );
};

export default Header;