import "./Cohorts.css"

export default function Cohorts({cohorts,filterStudents}){
return (
    <div>
        <h2 id="cohorth2">Choose a Class by Start Date</h2>
        <ul>
            <li className="cohorts" id = "allstudents" onClick = {filterStudents}>All Students</li>
            {cohorts.map(cohort =><li className="cohorts" id = {cohort}onClick={filterStudents} key ={cohort}>{`${cohort.split(/(\d+)/).join(" ")}`}</li>)}
        </ul>
    </div>
    )
}