import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [inputGoal, setInputGoal] = useState("");

  const onChangeHandler = (event) => {
    setInputGoal(event.target.value);
  };

  const onClickHandle = (event) => {
    event.preventDefault();
    props.onAddGoal(inputGoal);
    setInputGoal("");
  };
  return (
    <form onSubmit={onClickHandle} className="form-control">
      <div className="from-action">
        <label> Course Goal </label>
        <input type="text" value={inputGoal} onChange={onChangeHandler} />
      </div>
      <div className="form-actoin">
        <Button type="submit" >Add Goal</Button>
      </div>
    </form>
  );
};

export default CourseInput;
