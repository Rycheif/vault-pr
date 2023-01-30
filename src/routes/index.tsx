import React from "react";

import "../style/index.css"
import TextBoxWithIcon from "../component/TextBoxWithIcon";

const Index: React.FC = () => {
  const textInBoxes = [
    {title: 'Create', text: 'Did you find a movie that doesn\'t exist in the database? Just add it!', icon: 'fe:plus'},
    {title: 'Edit', text: 'You can easily update data about any movie in the database to keep it up to date', icon: 'fe:pencil'},
    {title: 'Browse', text: 'Find a movie that you are interested in or se what is popular now', icon: 'fe:search'},
    {title: 'Join', text: 'Interested? Join our community!', icon: 'fe:login'}
  ];

  return (
    <div className="hero d-flex flex-column align-items-center">
      <section className="d-flex flex-row flex-wrap">
        <div className="d-flex flex-column justify-content-center" style={{flex: 1}}>
          <h1 className="fw-bold display-1 mb-4">Vault</h1>
          <p style={{fontSize: "1.5rem"}}>Movie database created and maintained by the
            community</p>
        </div>
        <div className="hero-image d-flex m-5">
          <img src="src/assets/vectorpaint.png" alt="Vault" width="499" height="144"/>
        </div>
      </section>
      <section className="mt-5 grid-wrapper text-light">
        {
          textInBoxes.map((text, index) =>
            <TextBoxWithIcon
              key={index}
              text={text.text}
              title={text.title}
              iconName={text.icon}
              style={
                {
                  width: '33%',
                  minWidth: '300px'
                }
              }
            />)
        }
      </section>
    </div>
  );
};

export default Index;
