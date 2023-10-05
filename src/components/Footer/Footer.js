import React from 'react';
import s from './footer.module.scss'
import SvgSelector from "@/components/SvgSelector";
const Footer = () => {
  return (
    <div className={s.wrapper}>
      <footer>
        <SvgSelector svg={'footer-logo'}/>
        <div className={s.social}>
          <SvgSelector svg={'footer-vk'}/>
          <SvgSelector svg={'footer-dzen'}/>
          <SvgSelector svg={'footer-rutube'}/>
        </div>
        <p className={'normal_label'}>©2023</p>
      </footer>
    </div>
  );
};

export default Footer;