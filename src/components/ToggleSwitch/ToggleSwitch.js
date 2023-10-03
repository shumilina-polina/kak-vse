import React, {useState} from 'react';
import s from './toggleSwitch.module.scss'
import cn from 'classnames'
import {setSize, VersionContext} from "@/components/Context";
export const ToggleSwitchColor = () => {
  const [colorValue, setColorValue] = useState(false)
  return (
    <div
      className={s.label}
      onClick={()=>{setColorValue(!colorValue)}}
    >
      <div className={cn(s.slider, colorValue ? s.slider_left_color : s.slider_right_color)}/>

    </div>
  );
};

export const ToggleSwitchText = () => {
  const [textValue, setTextValue] = useState(false)
  return (
    <div
      className={s.label}
      onClick={()=>{
        setTextValue(!textValue)
        setSize(textValue)
        console.log(textValue)
      }}
    >
      <div className={cn(s.slider, textValue ? s.slider_left_text : s.slider_right_text)}/>

    </div>
  );
};

