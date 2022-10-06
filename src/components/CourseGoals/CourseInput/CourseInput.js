import React from "react";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = () => {
  return (
    <form className="form-control">
      <div className="from-action">
        <label> Course Goal </label>
        <input type="text" />
      </div>
      <div className="form-actoin">
        <Button label='Add Goal' type='submit'/>
      </div>
    </form>
  );
};

export default CourseInput;
