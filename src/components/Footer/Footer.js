import React, {useContext} from 'react';
import s from './footer.module.scss'
import SvgSelector from "@/components/SvgSelector";
import {colorContext, sizeContext} from "@/components/Context";
const Footer = () => {
  const nowDate = new Date()
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <div className={s.wrapper}>
      <footer>
        <SvgSelector svg={'footer-logo'}/>
        <div className={s.social}>
          <a href={'https://vk.com/kakvseinfo'} target={'_blank'}>
            <SvgSelector svg={'footer-vk'}/>
          </a>
          <a href={'https://dzen.ru/kakvse'} target={'_blank'}>
            <SvgSelector svg={'footer-dzen'}/>
          </a>
          <a href={'https://rutube.ru/channel/31625794/'} target={'_blank'}>
            <SvgSelector svg={'footer-rutube'}/>
          </a>
        </div>
        <p className={`${sizeVersion}_label`}>©{nowDate.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;