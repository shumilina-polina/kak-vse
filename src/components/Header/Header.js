import React, {useContext, useState} from 'react';
import s from './header.module.scss'
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Ellipse from "@/components/Ellipse/Ellipse";
import {Button, ToggleButton} from "@mui/material";
import cn from 'classnames'
import {VersionContext} from "@/components/Context";
import {ToggleSwitchColor, ToggleSwitchText} from "@/components/ToggleSwitch/ToggleSwitch";

const Header = () => {
  const [show, setShow] = useState(false)
  const version = useContext(VersionContext)
  return (
    <div className={cn(s.wrapper, show && s.show)}>
      <header>
        <Link href={'/'} className={s.logo}>
          <SvgSelector svg={'logo'}/>
        </Link>

        <div className={s.links}>
          <Link
            href={'/opportunities'}
            className={s.link}
          >
            <SvgSelector svg={`link-opportunities-${version.color}`}/>
            <p className={`${version.size}_h4`}>Ваши возможности</p>
          </Link>

          <Link
            href={'/advices'}
            className={s.link}
          >
            <SvgSelector svg={`link-advices-${version.color}`}/>
            <p className={`${version.size}_h4`}>Полезные советы</p>
          </Link>

          <Link
            href={'/success'}
            className={s.link}
          >
            <SvgSelector svg={`link-success-${version.color}`}/>
            <p className={`${version.size}_h4`}>Истории успеха</p>
          </Link>

          <Link
            href={'/service'}
            className={s.link}
          >
            <SvgSelector svg={`link-service-${version.color}`}/>
            <p className={`${version.size}_h4`}>Ответы на впоросы</p>
          </Link>
        </div>

        <button
          onClick={()=>setShow(!show)}
          className={s.unvisible}
        >
          <p className={`${version.size}_t4`}>Версия для <br/>слабовидящих</p>
          <SvgSelector svg={`unvisually-${show? 'open' : 'close'}`}/>
        </button>

      </header>

      <div className={s.die}>
        <p className={`${version.size}_t1`}>Размер</p>
        <ToggleSwitchText/>
        <p className={`${version.size}_t1`}>Цвет</p>
        <ToggleSwitchColor/>
      </div>
    </div>


  );
};

export default Header;