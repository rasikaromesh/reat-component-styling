import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  return (
    <div className="App">
      <section id="goals-form">
        <CourseInput />
      </section>
      <section id="goals">
        <CourseGoalList/>
      </section>
    </div>
  );
}

export default App;
