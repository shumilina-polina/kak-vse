import React, {useContext, useState} from 'react';
import s from './toggleSwitch.module.scss'
import cn from 'classnames'
import {sizeContext, colorContext} from "@/components/Context";
import SvgSelector from "@/components/SvgSelector";

export const ToggleSwitchColor = () => {
  const [colorVersion, setColorVersion] = useContext(colorContext)

  return (
    <div
      className={s.label}
      onClick={() => {
        setColorVersion(colorVersion === 'color' ? 'grey' : 'color')
        window.ym(95261427,'reachGoal','SwichColor')
      }}
      id={'colorSwitch'}
    >
      <div className={cn(s.slider, colorVersion === 'color' ? s.slider_left_color : s.slider_right_color)}/>

    </div>
  );
};

export const ToggleSwitchText = () => {
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <>
      <div
        className={s.label}
        onClick={() => {
          setSizeVersion(sizeVersion === 'normal' ? 'large' : 'normal')
          window.ym(95261427,'reachGoal','SwichSize')
        }}
        id={'textSwitch'}
      >


        <div className={s.svg1}>
          <SvgSelector svg={'size-small'}/>
        </div>
        <div className={s.svg2}>
          <SvgSelector svg={'size-large'}/>
        </div>
        <div className={cn(s.slider, sizeVersion === 'normal' ? s.slider_left_text : s.slider_right_text)}/>



      </div>

    </>

  );
};

