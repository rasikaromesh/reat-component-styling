import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    margin-bottom: 0.5rem;
    display: block;
    font-weight: bold;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => (props.invalid? 'red': '#ccc')};
    background: ${props => (props.invalid? '#ffd7d7': 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  .from-action {
    margin: 1rem auto;
  }
`;

const CourseInput = (props) => {
  const [inputGoal, setInputGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onChangeHandler = (event) => {
    setIsValid(true)
    if (event.target.value.trim().length < 1) {
      setIsValid(false);
    }
    setInputGoal(event.target.value);
  };

  const onClickHandle = (event) => {
    event.preventDefault();
    if (inputGoal.trim().length < 1) {
      setIsValid(false);
    } else {
      props.onAddGoal(inputGoal);
    }
    setInputGoal("");
  };

  return (
    <form onSubmit={onClickHandle} className="form-control">
      <FormControl invalid={!isValid}>
        <label> Course Goal </label>
        <input type="text" value={inputGoal} onChange={onChangeHandler} />
      </FormControl>
      <FormControl>
        <Button type="submit">Add Goal</Button>
      </FormControl>
    </form>
  );
};

export default CourseInput;
