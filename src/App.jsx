import studentsData from "./data/data.json"
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
import Cohorts from "./Components/Cohorts";
function App() {
  const [students, setStudents] = useState(studentsData);
  
  const [filter, setFilter] = useState([]);
  const cohorts = students.map(student => student.cohort).sort((a,b)=>new Date(b.cohortStartDate) - new Date(a.cohortStartDate)).map(cohort=>cohort.cohortCode).filter((code,index,array)=>array.indexOf(code)===index);
  function filterStudents(e){
    if(e.target.id === "allstudents"){
      setFilter(students)
    }else {setFilter(students.filter(ele=>ele.cohort.cohortCode ===e.target.id))};
  }
  return (
    <div>
      <h1>Student Dashboard</h1>
      <div>
        <Cohorts 
        cohorts = {cohorts}
        filterStudents = {filterStudents}
        />
      </div>
      <ul>
        <AllStudents 
        students = {filter.length === 0 ? students : filter}
        />
      </ul>
    </div>
  );
}

export default App;
