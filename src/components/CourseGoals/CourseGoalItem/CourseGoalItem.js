import React from "react";
import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
    const onClickHandler = () => {
        props.onClick(props.id)
      }
  return <li className="item" onClick={onClickHandler}>{props.children}</li>;
};

export default CourseGoalItem;
