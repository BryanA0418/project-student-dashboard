import studentsData from "./data/data.json"
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
import Cohorts from "./Components/Cohorts";
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);
  
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
    <div>
      <h1 className="main-heading">Student Dashboard</h1>
      <div className="main-content">
        <div>
          <Cohorts 
          cohorts = {cohorts}
          filterStudents = {filterStudents}
          />
        </div>
        <ul>
          <AllStudents
          addComment = {addComment}
          students = {filteredStudents}
          />
        </ul>
      </div>  
    </div>
  );
}

export default App;
