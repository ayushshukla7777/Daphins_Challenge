import React, { useState } from "react";
import "../styles/ReadMore.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
  
const Content = (props) => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
        {props.data}
        </ReadMore>
      </h2>
    </div>
  );
};
  
export default Content;