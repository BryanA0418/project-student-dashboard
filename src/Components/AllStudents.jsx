import Student from "./Student"
export default function AllStudents({students,addComment}){
    return(
        <div>
            <h1>{students.length >= 250 ? "All Students" : students[0].cohort.cohortCode.split(/(\d+)/).join(" ")}</h1>
            <h3>Total Students: <span>{students.length}</span></h3>
            {
            students.map(student => 
            <Student
                addComment = {addComment}
                student = {student}
                key = {student.id}
            />)
            }
        </div>
    )
}