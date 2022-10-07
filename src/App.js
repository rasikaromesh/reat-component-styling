import { useState } from "react";
import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  const [goals, setGoals] = useState([
    { goal: "Finished the course!", id: "1" },
    { goal: "Do all tbe excercise!", id: "2" },
    { goal: "Improve my react knoladge!", id: "3" },
  ]);

  const onSubmit = (goal) => {
    console.log("onSubmit");
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ goal, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  return (
    <div className="App">
      <section id="goals-form">
        <CourseInput submit={onSubmit}/>
      </section>
      <section id="goals">
        <CourseGoalList goals={goals} />
      </section>
    </div>
  );
}

export default App;
