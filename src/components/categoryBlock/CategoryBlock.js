import React, {useContext} from 'react';
import s from './categoryBlock.module.scss'
import CardVideo from "@/components/cardVideo/CardVideo";
import SvgSelector from "@/components/SvgSelector";
import Link from "next/link";
import Image from "next/image";
import {Skeleton, useMediaQuery} from "@mui/material";
import {apiUrl} from "@/shared/constants/config";
import Markdown from "react-markdown";
import {colorContext, sizeContext} from "@/components/Context";
import cn from "classnames";

const CategoryBlock = ({Category, VIDEO_DATA, ARTICLE_DATA, error, loaded}) => {
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  const isMobile = useMediaQuery(`(max-width: 480px)`);

  const category = Category === 'opportunities'
    ? {
      color: "#FFADDE",
      colorLight: "#FFD8EF",
      colorDark: "#E089BE",
      link: '/opportunities',
      text1: 'Ваши возможности →',
      textTitle: 'Найди свой путь самореализации',
      svgIcon: 'opportunities-'
    }
    : Category === 'advices'
      ? {
        color: "#A7EAFF",
        colorLight: "#C4F1FF",
        colorDark: "#7FCFE9",
        link: '/advices',
        text1: 'Полезные советы →',
        textTitle: `Познакомься с полезными \n\n советами от экспертов`,
        svgIcon: 'advices-'
      }
      : {
        color: "#FFECA7",
        colorLight: "#FFF3C8",
        colorDark: "#F5DC85",
        link: '/success',
        text1: 'Истории успеха →',
        textTitle: 'Найди вдохновение \n\n в историях успеха',
        svgIcon: 'success-'
      };
  return (
    <>
      {
        !isMobile
          ? //----------------------------------------------------------------------desktop
          (
            <div className={s.block}>
              <div className={s.title}>
                <div className={s.title_text}>
                  <Link
                    className={cn(s.link, `${colorVersion}_${Category}_light`)}
                    href={category.link}
                  >
                    <p className={`${sizeVersion}_caption`}>{category.text1}</p>
                  </Link>
                  <h1 className={`${sizeVersion}_h1`}><Markdown>{category.textTitle}</Markdown></h1>
                </div>
                <SvgSelector svg={category.svgIcon + colorVersion}/>
              </div>

              <div className={s.content}>
                <div className={s.content_video}>
                  <label><p className={`${sizeVersion}_label`}>Видео</p></label>
                  <div className={s.content_video_wrapper}>
                    {VIDEO_DATA?.map((path, i) => (
                      <CardVideo
                        Category={Category}
                        tags={path.attributes.tags}
                        title={path.attributes.title}
                        url={path.attributes.urlEmbed}
                        urlShare={path.attributes.urlShare}
                        loaded={loaded}
                        key={i}
                      />
                    ))}
                  </div>
                </div>
                <div className={s.content_article}>
                  <label><p className={`${sizeVersion}_label`}>Статьи</p></label>
                  <div
                    className={cn(s.content_article_wrapper, `${colorVersion}_${Category}_border`)}
                  >
                    <div className={s.articles}>
                      {loaded ? (
                        <>
                          {[1, 2, 3].map((path, i) => (
                            <div className={s.article_row} key={`row${i}`}>
                              <Skeleton variant="circular" width={44} height={44}/>
                              <div className={s.text}>
                                <Skeleton variant="rounded" sx={{borderRadius: '12px', height: '12px', width: '35px'}}
                                          animation="wave"/>

                                <Skeleton variant="rounded" sx={{borderRadius: '16px', height: '12px', width: '80%'}}
                                          animation="wave"/>
                                <Skeleton variant="rounded" sx={{borderRadius: '16px', height: '12px', width: '60%'}}
                                          animation="wave"/>
                                <Skeleton variant="rounded" sx={{borderRadius: '16px', height: '12px', width: '247px'}}
                                          animation="wave"/>
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {ARTICLE_DATA?.map((path, i) => (
                            <Link href={`/articles/${path.attributes.slug}`} className={s.article_row} key={`row${i}`}>
                              <Image
                                src={apiUrl + path.attributes.author_photo.data.attributes.url}
                                alt={'author'}
                                className={s.image}
                                key={`image${i}`}
                                width={40}
                                height={40}
                                placeholder={'blur'}
                                blurDataURL={path.attributes.author_photo.data.attributes.blurhash}
                              />
                              <div className={s.text}>
                                <p className={`${sizeVersion}_label`} key={`author${i}`}>
                                  <Markdown>{path.attributes.author_name}</Markdown>
                                </p>
                                <h3 className={`${sizeVersion}_h3`} key={`title${i}`}>
                                  <Markdown>{path.attributes.title}</Markdown>
                                </h3>
                              </div>
                            </Link>
                          ))}
                        </>
                      )}

                    </div>

                    <Link
                      href={category.link}
                      className={cn(s.link, `${colorVersion}_${Category}_light`)}
                    >
                      <h3 className={`${sizeVersion}_h3`}>Читать все →</h3>
                    </Link>
                  </div>
                </div>
              </div>

              <Link

                href={category.link}
                className={cn(s.large_link, `${colorVersion}_${Category}_normal`, `${colorVersion}_${Category}_darkBorder`)}
              >
                <h2 className={`${sizeVersion}_h2`}>Больше видео и статей →</h2>
              </Link>
            </div>
          )
          : //----------------------------------------------------------------------mobile
          (
            <div className={s.block}>
              <div className={s.title}>
                <div className={s.title_text}>
                  <Link
                    className={cn(s.link, `${colorVersion}_${Category}_light`)}
                    href={category.link}
                  >
                    <p className={`${sizeVersion}_caption`}>{category.text1}</p>
                  </Link>
                  <SvgSelector svg={category.svgIcon + colorVersion}/>
                </div>
                <h1 className={`${sizeVersion}_h1`}>{category.textTitle}</h1>
              </div>

              <div className={s.content}>

                <CardVideo
                  Category={Category}
                  tags={!loaded && VIDEO_DATA[0]?.attributes.tags}
                  title={!loaded && VIDEO_DATA[0]?.attributes.title}
                  url={!loaded && VIDEO_DATA[0]?.attributes.urlEmbed}
                  urlShare={!loaded && VIDEO_DATA[0]?.attributes.urlShare}
                  loaded={loaded}
                  key={'video_1'}
                />


                <div
                  className={cn(s.content_article_wrapper, `${colorVersion}_${Category}_border`)}
                  style={{
                    borderColor: category.color,
                  }}
                >

                  <div className={s.articles}>
                    {ARTICLE_DATA?.map((path, i) => (
                      <Link
                        href={`/articles/${path.attributes.slug}`}
                        className={s.article_row} key={`row${i}`}
                        onClick={()=>(windows.ym(95261427,'reachGoal','OpenArticle'))}
                      >
                        <Image
                          src={apiUrl + path.attributes.author_photo.data.attributes.url}
                          alt={'author'}
                          className={s.image}
                          key={`image${i}`}
                          width={40}
                          height={40}
                          placeholder={'blur'}
                          blurDataURL={path.attributes.author_photo.data.attributes.blurhash}
                        />
                        <div className={s.text}>
                          <p className={`${sizeVersion}_label`} key={`author${i}`}>
                            <Markdown>{path.attributes.author_name}</Markdown>
                          </p>
                          <h3 className={`${sizeVersion}_h3`} key={`title${i}`}>
                            <Markdown>{path.attributes.title}</Markdown>
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={category.link}
                    className={cn(s.link, `${colorVersion}_${Category}_light`)}
                  >
                    <h3 className={'normal_h3'}>Читать все →</h3>
                  </Link>
                </div>
                {!loaded && VIDEO_DATA?.length !== 1 &&
                  <CardVideo
                    Category={Category}
                    tags={VIDEO_DATA[1]?.attributes.tags}
                    title={VIDEO_DATA[1]?.attributes.title}
                    url={VIDEO_DATA[1]?.attributes.urlEmbed}
                    urlShare={VIDEO_DATA[1]?.attributes.urlShare}
                    loaded={loaded}
                    key={'video_2'}
                  />
                }
              </div>
              <Link
                href={category.link}
                className={cn(s.large_link, `${colorVersion}_${Category}_normal`, `${colorVersion}_${Category}_darkBorder`)}
              >
                <h2 className={'normal_h2'}>Больше видео и статей →</h2>
              </Link>
            </div>
          )
      }
    </>
  );


};

export default CategoryBlock;