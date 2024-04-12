export default function Cohorts({cohorts,filterStudents}){
return (
    <ul>
        <li id = "allstudents" onClick = {filterStudents}>All Students</li>
        {cohorts.map(cohort =><li id = {cohort}onClick={filterStudents} key ={cohort}>{`${cohort.split(/(\d+)/).join(" ")}`}</li>)}
    </ul>
)
}