import React, {useContext, useState} from 'react';
import s from './header.module.scss'
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Ellipse from "@/components/Ellipse/Ellipse";
import {useMediaQuery} from "@mui/material";
import cn from 'classnames'
import {ToggleSwitchColor, ToggleSwitchText} from "@/components/ToggleSwitch/ToggleSwitch";
import {colorContext, sizeContext} from "@/components/Context";

const Header = () => {
  const [show, setShow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery(`(max-width: 480px)`);
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  if (!isMobile) {
    return ( //-------------------------------------------------------------------------desktop
      <div className={cn(s.wrapper, show && s.show)}>
        <div className={s.wr}>
          <header>
            <Link href={'/'} className={s.logo}>
              <SvgSelector svg={'logo'}/>
            </Link>

            <div className={s.links}>
              <Link
                href={'/opportunities'}
                className={s.link}
              >
                <SvgSelector svg={`link-opportunities-color`}/>
                <p className={`${sizeVersion}_h4`}>Ваши возможности</p>
              </Link>

              <Link
                href={'/advices'}
                className={s.link}
              >
                <SvgSelector svg={`link-advices-color`}/>
                <p className={`${sizeVersion}_h4`}>Полезные советы</p>
              </Link>

              <Link
                href={'/success'}
                className={s.link}
              >
                <SvgSelector svg={`link-success-color`}/>
                <p className={`${sizeVersion}_h4`}>Истории успеха</p>
              </Link>

              <Link
                href={'/service'}
                className={s.link}
              >
                <SvgSelector svg={`link-service-color`}/>
                <p className={`${sizeVersion}_h4`}>Ответы на вопросы</p>
              </Link>
            </div>

            <button
              onClick={() => setShow(!show)}
              className={s.unvisible}
            >
              <p className={`${sizeVersion}_t4`}>Версия для <br/>слабовидящих</p>
              <SvgSelector svg={`unvisually-${show ? 'open' : 'close'}`}/>
            </button>

          </header>
        </div>

        <div className={s.die}>
          <div className={s.switch}>
            <p className={`${sizeVersion}_t1`}>Размер</p>
            <ToggleSwitchText/>
          </div>
          <div className={s.switch}>
            <p className={`${sizeVersion}_t1`}>Цвет</p>
            <ToggleSwitchColor/>
          </div>
        </div>
      </div>
    );
  } else {
    return ( //-------------------------------------------------------------------------mobile
      <>
        <div
          className={s.menuLinks}
          style={{
            // marginTop: show ? '112px' : '60px',
            height: menuOpen ? '100vh' : '0vh',
            top: menuOpen ? '0' : '-220px',

        }}
        >
          <Link
            href={'/opportunities'}
            className={s.link}
            onClick={()=> setMenuOpen(!menuOpen)}
          >
            <SvgSelector svg={`link-opportunities-color`}/>
            <p className={`${sizeVersion}_h4`}>Ваши возможности</p>
          </Link>

          <Link
            href={'/advices'}
            className={s.link}
            onClick={()=> setMenuOpen(!menuOpen)}
          >
            <SvgSelector svg={`link-advices-color`}/>
            <p className={`${sizeVersion}_h4`}>Полезные советы</p>
          </Link>

          <Link
            href={'/success'}
            className={s.link}
            onClick={()=> setMenuOpen(!menuOpen)}
          >
            <SvgSelector svg={`link-success-color`}/>
            <p className={`${sizeVersion}_h4`}>Истории успеха</p>
          </Link>

          <Link
            href={'/service'}
            className={s.link}
            onClick={()=> setMenuOpen(!menuOpen)}
          >
            <SvgSelector svg={`link-service-color`}/>
            <p className={`${sizeVersion}_h4`}>Ответы на вопросы</p>
          </Link>
        </div>
        <div className={cn(s.wrapper, show && s.show)}>
          <div className={s.wr}>

            <header>
              <Link href={'/'} className={s.logo}>
                <SvgSelector svg={'logo'}/>
              </Link>
              <button
                className={s.menu}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <h4 className={'normal_h4'}>
                  {menuOpen ? 'Закрыть' : 'Меню'}
                </h4>
              </button>
              <button
                onClick={() => setShow(!show)}
                className={s.unvisible}
              >
                <SvgSelector svg={`unvisually-${show ? 'open' : 'close'}`}/>
              </button>

            </header>
          </div>

          <div className={s.die}>
            <div className={s.switch}>
              <p className={`${sizeVersion}_t1`}>Размер</p>
              <ToggleSwitchText/>
            </div>
            <div className={s.switch}>
              <p className={`${sizeVersion}_t1`}>Цвет</p>
              <ToggleSwitchColor/>
            </div>
          </div>
        </div>
      </>
    );
  }

};

export default Header;