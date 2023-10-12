import React, {useContext} from 'react';
import s from './cardArticle.module.scss'
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
import cn from "classnames";
import {Skeleton} from "@mui/material";
const CardArticle = ({Category, author, image, title, previewText, url, loaded}) => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  return (
    <div className={cn(s.card, `${colorVersion}_${Category}_border`)}>
      {loaded ? (
        <>
          <div className={s.title}>
            <Skeleton variant="circular" width={52} height={44}/>
            <div className={s.title_text}>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '35%' }} animation="wave"/>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '16px', width: '60%' }} animation="wave"/>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '16px', width: '45%' }} animation="wave"/>
              <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '16px', width: '80%' }} animation="wave"/>
            </div>
          </div>
          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '80%' }} animation="wave"/>
          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '90%' }} animation="wave"/>
          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '95%' }} animation="wave"/>
          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '85%' }} animation="wave"/>
          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '12px', width: '60%' }} animation="wave"/>

          <Skeleton variant="rounded" sx={{borderRadius: '20px', height: '48px', width: '100%'}} animation="wave"/>
        </>
      ) : (
        <>
          <div className={s.title}>
            <Image
              src={image}
              alt={'author'}
              width={52}
              height={52}
            />
            <div className={s.title_text}>
              <p className={`${sizeVersion}_label`}><Markdown>{author}</Markdown></p>
              <h3><Markdown className={`${sizeVersion}_h3`}>{title}</Markdown></h3>
            </div>
          </div>
          <p className={`${sizeVersion}_t3`}><Markdown className={classNames(s.text, )}>{previewText}</Markdown></p>
          <Link
            href={`/articles/${url}`}
            className={cn(s.button, `${colorVersion}_${Category}_light`)}
          >
            <p className={`${sizeVersion}_h3`}>Читать →</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default CardArticle;