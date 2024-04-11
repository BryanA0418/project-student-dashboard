import studentsData from "./data/data.json"
import AllStudents from "./Components/AllStudents";
import { useState } from "react";
function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        <AllStudents 
        students = {students}
        />
      </ul>
    </div>
  );
}

export default App;
