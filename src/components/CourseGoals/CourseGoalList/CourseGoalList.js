import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";
const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((item) => (
        <CourseGoalItem key={item.id} id={item.id} onClick={props.onDelete}>{item.goal}</CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
