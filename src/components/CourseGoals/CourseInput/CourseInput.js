import React from "react";
import "./CourseInput.css";

const CourseInput = () => {
  return (
    <form className="form-control">
      <div className="from-action">
        <label> Course Goal </label>
        <br/>
        <input type="text" />
      </div>
    </form>
  );
};

export default CourseInput;
