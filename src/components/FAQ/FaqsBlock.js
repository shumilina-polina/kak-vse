import React, {useContext, useState} from "react";
import { GET_FAQS } from "@/services/gqlService";
import { useQuery } from "@apollo/client";
import Markdown from "react-markdown";
import Link from "next/link";
import s from "./faqs.module.scss";
import SvgSelector from "@/components/SvgSelector";
import cn from "classnames";
import { useRouter } from "next/router";
import {colorContext, sizeContext} from "@/components/Context";

const FaqsBlock = ({ data }) => {
  const { pathname } = useRouter();
  const [close, setClose] = useState(pathname !== "/service");
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <div
      className={cn(
        s.categoryBlock,
        close ? s.categoryBlock_close : s.categoryBlock_open,
        `${colorVersion}_service_darkBorder`,
        `${colorVersion}_service_normal`
      )}
      onClick={() => setClose(!close)}
    >
      <h2 className={`${sizeVersion}_h2`}>
        <Markdown>{data.title}</Markdown>
      </h2>
      <button
        className={s.arrow}
        style={{
          transform: close ? "rotate(180deg)" : "rotate(0)",
          filter: colorVersion === 'color' ? 'invert(0)' : 'invert(1)',
      }}
      >
        <SvgSelector svg={"arrow"} />
      </button>
      <div className={s.categoryBlock_questions}>
        {data.faqs.data.map((question, jndex) => (
          <Link
            href={`/answer/${question.attributes.slug}`}
            className={`${sizeVersion}_t2`}
            key={jndex}
            style={{ transitionDelay: `${jndex / 10}s` }}
          >
            <p className={`${sizeVersion}_t2`}>{question.attributes.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FaqsBlock;
