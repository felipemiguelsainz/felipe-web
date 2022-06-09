import React from "react";

export default function ProjectExampleCard ({darkTheme, el, clickFunction}) {
  return (
    <div onClick={() => clickFunction(el.link)} className={darkTheme ? 'project-card dark' : 'project-card light'}>
      <img src={el.imageSrc} alt="asf"/>
      <h5>{el.title}</h5>
      <p>{el.subtitle}</p>
  </div>)
}
