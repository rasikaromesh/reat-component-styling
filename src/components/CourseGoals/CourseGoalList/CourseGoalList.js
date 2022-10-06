import React from "react";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

import "./CourseGoalList.css";
const CourseGoalList = () => {
  const list = [
    "Finished the course!",
    "Do all tbe excercise!",
    "Improve my react knoladge!",
  ];
  return (
    <div className="goal-list">
      {list.map((item) => (
        <CourseGoalItem key={item} lable={item} />
      ))}
    </div>
  );
};

export default CourseGoalList;
