import React from 'react';
import {Icon} from "@iconify/react";

import "../style/TextBoxWithIcon.css"

interface TextBoxWithIconProps {
  text: string,
  title: string
  iconName: string
}

const TextBoxWithIcon: React.FC<TextBoxWithIconProps> = ({text, iconName, title}) => {
  return (
    <div className="box">
      <article className="bg-dark">
        <div className="text-center pb-3">
          <Icon icon={iconName} style={{fontSize: '36px', color: "#ef4523"}}/>
        </div>
        <h2 className="text-center">{title}</h2>
        <p className="px-5">{text}</p>
      </article>
    </div>
  );
}

export default TextBoxWithIcon;
