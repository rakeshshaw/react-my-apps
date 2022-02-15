import React, { useState } from "react";

const Accordion = ({ items }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const titleClick = (index) => {
    console.log(index);
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div onClick={()=>titleClick(index)} className={`title ${active}`}>
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
