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
  };
  return (
    <form onSubmit={onClickHandle} className="form-control">
      <div className="from-action">
        <label> Course Goal </label>
        <input type="text" onChange={onChangeHandler}/>
      </div>
      <div className="form-actoin">
        <Button label="Add Goal" type="submit" />
      </div>
    </form>
  );
};

export default CourseInput;
