import React, { useContext, useEffect } from "react";
import s from "./footer.module.scss";
import SvgSelector from "@/components/SvgSelector";
import { colorContext, sizeContext } from "@/components/Context";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
const Footer = () => {
  const nowDate = new Date();
  const [colorVersion, setColorVersion] = useContext(colorContext);
  const [sizeVersion, setSizeVersion] = useContext(sizeContext);

  const scrollToTop = () => window.scrollTo(0, 0);

  const isMobile = useMediaQuery(`(max-width: 480px)`);

  return (
    <div className={s.wrapper}>
      <footer>
        <div className={s.logo_wr}>
          <button onClick={() => scrollToTop()}>
            <SvgSelector svg={"footer-logo"} />
          </button>
          {isMobile || (
            <p className={`${sizeVersion}_label`}>©{nowDate.getFullYear()}</p>
          )}
        </div>

        <div className={s.social}>
          <a href={"https://vk.com/kakvseinfo"} target={"_blank"}>
            <SvgSelector svg={"footer-vk"} />
          </a>
          <a href={"https://dzen.ru/kakvse"} target={"_blank"}>
            <SvgSelector svg={"footer-dzen"} />
          </a>
          <a href={"https://rutube.ru/channel/31625794/"} target={"_blank"}>
            <SvgSelector svg={"footer-rutube"} />
          </a>
        </div>
        {isMobile && (
          <p className={`${sizeVersion}_label`}>©{nowDate.getFullYear()}</p>
        )}
        <div className={classNames(`${sizeVersion}_label`, s.podderzhka)}>
          <span>При поддержке</span>
          <SvgSelector svg={"footer-logo-iri"} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
