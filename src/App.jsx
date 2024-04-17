import studentsData from "./data/data.json"
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
import Cohorts from "./Components/Cohorts";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [darkMode,setDarkMode] = useState(true);
  const [filteredStudents, setFilteredStudents] = useState(students);
  const cohorts = students.map(student => student.cohort).sort((a,b)=>new Date(b.cohortStartDate) - new Date(a.cohortStartDate)).map(cohort=>cohort.cohortCode).filter((code,index,array)=>array.indexOf(code)===index);
  function filterStudents(e){
    if(e.target.id === "allstudents"){
      setFilteredStudents(students)
    }else {setFilteredStudents(students.filter(ele=>ele.cohort.cohortCode === e.target.id))};
  }

  function addComment(student,comment){
    students.forEach(ele => ele.id === student.id && ele.notes.push(comment))
    setStudents([...students])
  }

  return (
    <div className="container">
      <h1 className={darkMode ? "main-heading" : "darkMode-heading"}>Student Dashboard <input type="checkbox" id="darkmode" class="toggle"/>
      <label for="darkmode" class="label">
        <div onClick={()=>setDarkMode(!darkMode)}class="ball">

        
        </div>

      </label></h1>
        <div className="cohorts-column">
          <Cohorts 
          cohorts = {cohorts}
          filterStudents = {filterStudents}
          />
        </div>
        <ul className="students-list">
          <AllStudents
          addComment = {addComment}
          students = {filteredStudents}
          />
        </ul>
      </div>  
  );
}

export default App;
