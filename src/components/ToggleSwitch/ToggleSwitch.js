import React, {useContext, useState} from 'react';
import s from './toggleSwitch.module.scss'
import cn from 'classnames'
import {sizeContext, colorContext} from "@/components/Context";
export const ToggleSwitchColor = () => {
  const [colorVersion, setColorVersion] = useContext(colorContext)

  return (
    <div
      className={s.label}
      onClick={()=>{
        setColorVersion(colorVersion === 'color' ? 'grey' : 'color')
      }}
    >
      <div className={cn(s.slider, colorVersion === 'color' ? s.slider_left_color : s.slider_right_color)}/>

    </div>
  );
};

export const ToggleSwitchText = () => {
  const [sizeVersion, setSizeVersion] = useContext(sizeContext)

  return (
    <div
      className={s.label}
      onClick={()=>{
        setSizeVersion(sizeVersion === 'normal' ? 'large' : 'normal')
      }}
    >
      <div className={cn(s.slider, sizeVersion === 'normal' ? s.slider_left_text : s.slider_right_text)}/>

    </div>
  );
};

