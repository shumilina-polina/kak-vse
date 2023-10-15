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
import AnswerComponent from "@/components/answerComponent/Answer";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Popover} from "@mui/material";


const FaqsBlock = ({ data, id }) => {
  const { pathname } = useRouter();
  const [colorVersion, setColorVersion] = useContext(colorContext)
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)
  const [openModal, setOpenModal] = useState()
  const [slugValue, setSlugValue] = useState()
  const [close, setClose] = useState(pathname !== "/service" && id !== 0);

  const handleClose = () => {
    setOpenModal(false);
  };

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
            <button
              //href={`/answer/${question.attributes.slug}`}
              className={`${sizeVersion}_t2`}
              key={jndex}
              style={{ transitionDelay: `${jndex / 10}s` }}
              onClick={()=>{
                setOpenModal(!openModal)
                setSlugValue(question.attributes.slug)
                window.ym(95261427,'reachGoal','OpenAnswer')
              }}
            >
              <p className={`${sizeVersion}_t2`}>{question.attributes.title}</p>
            </button>
          ))}
        </div>

      <Dialog
        open={openModal}
        onClose={handleClose}
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          transition: '0.5s',
        }}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <Button
            onClick={handleClose}
            id={'closeModal'}
          >
            <SvgSelector svg={'modal-close'}/>
          </Button>
        </DialogTitle>
        <DialogContent
          dividers={false}
        >
          <DialogContentText
            id="scroll-dialog-description"
            //tabIndex={-1}
          >
            <AnswerComponent id={slugValue}/>
          </DialogContentText>
        </DialogContent>

      </Dialog>

    </div>
  );
};

export default FaqsBlock;
