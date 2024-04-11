import BuildAStudent from "./Student"
export default function AllStudents({students}){
    return(
        <div>
            {
            students.map(student => 
            <BuildAStudent 
                student = {student}
            />)
            }
        </div>
    )
}