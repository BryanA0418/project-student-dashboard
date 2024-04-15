import Student from "./Student"
export default function AllStudents({students,addComment}){
    return(
        <div>
            <h1>{students.length >= 250 ? "All Students" : students[0].cohort.cohortCode.split(/(\d+)/).join(" ")}</h1>
            <p>Total Students: <span>{students.length}</span></p>
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