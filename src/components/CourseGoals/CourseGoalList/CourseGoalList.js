import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";
const CourseGoalList = (props) => {
  return (
    <div className="goal-list">
      {props.goals.map((item) => (
        <CourseGoalItem key={item.id} lable={item.goal} />
      ))}
    </div>
  );
};

export default CourseGoalList;
