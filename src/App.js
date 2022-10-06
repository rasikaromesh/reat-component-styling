import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

function App() {
  return (
    <div className="App">
      <section id="goals-form">
        <CourseInput />
      </section>
      <section id="goals">
        <h3>Goal List</h3>
      </section>
    </div>
  );
}

export default App;
