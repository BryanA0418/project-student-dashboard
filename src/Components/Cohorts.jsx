export default function Cohorts({cohorts,filterStudents}){
return (
    <div>
        <h2>Choose a Class by Start Date</h2>
        <ul>
            <li id = "allstudents" onClick = {filterStudents}>All Students</li>
            {cohorts.map(cohort =><li id = {cohort}onClick={filterStudents} key ={cohort}>{`${cohort.split(/(\d+)/).join(" ")}`}</li>)}
        </ul>
    </div>
    )
}