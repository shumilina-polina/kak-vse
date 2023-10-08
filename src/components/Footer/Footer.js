import React from 'react';
import s from './footer.module.scss'
import SvgSelector from "@/components/SvgSelector";
const Footer = () => {
  const nowDate = new Date()

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
        <p className={'normal_label'}>©{nowDate.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;