import React from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const onClickHandle = (event) => {
    event.preventDefault();
    props.submit(event.target.value);
  };
  return (
    <form onSubmit={onClickHandle} className="form-control">
      <div className="from-action">
        <label> Course Goal </label>
        <input type="text" />
      </div>
      <div className="form-actoin">
        <Button label="Add Goal" type="submit" />
      </div>
    </form>
  );
};

export default CourseInput;
