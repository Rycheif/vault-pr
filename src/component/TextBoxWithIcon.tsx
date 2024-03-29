import React, {CSSProperties} from 'react';
import {Icon} from "@iconify/react";

import "../style/TextBoxWithIcon.css"

interface TextBoxWithIconProps {
  text: string
  title: string
  iconName: string
  style?: CSSProperties | undefined
}

const TextBoxWithIcon: React.FC<TextBoxWithIconProps> = ({text, iconName, title, style}) => {
  return (
    <div className="box" style={style}>
      <article className="bg-dark">
        <div className="text-center pb-3">
          <Icon icon={iconName} className="icon"/>
        </div>
        <h2 className="text-center">{title}</h2>
        <p className="px-5">{text}</p>
      </article>
    </div>
  );
}

export default TextBoxWithIcon;
