import "./Cohorts.css"

export default function Cohorts({cohorts,filterStudents}){
return (
    <>
        <h1 id="cohorts2">Choose a Class by Start Date</h1>
        <ul>
            <li className="cohorts" id = "allstudents" onClick = {filterStudents}>All Students</li>
            {cohorts.map(cohort =><li className="cohorts" id = {cohort}onClick={filterStudents} key ={cohort}>{`${cohort.split(/(\d+)/).join(" ")}`}</li>)}
        </ul>
    </>
    )
}