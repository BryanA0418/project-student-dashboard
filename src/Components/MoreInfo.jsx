import OneOnOne from "./OneOnOne";

export default function MoreInfo({student,addComment}){
    const {total:currentTotal,lastWeek:currentLastWeek} = student.codewars.current;
    const {total} = student.codewars.goal;

    const {assignments,projects,assessments} = student.cohort.scores;
    const {resume,linkedin,github,mockInterview} = student.certifications;

    return(
        <div>
            <div>
                <h2>Codewars:</h2>
                <p>Current Total: {currentTotal}</p>
                <p>Last Week: {currentLastWeek}</p>
                <p>Goal: {total}</p>
                <p>Percent of Goal Achieved: {Math.round((currentTotal/total)*100)}%</p>
            </div>
            <div>
                <h2>Scores:</h2>
                <p>Assignments:{assignments*100}%</p>
                <p>Projects:{projects*100}%</p>
                <p>Assessments:{assessments*100}%</p>
            </div>
            <div>
                <h2>Certifications:</h2>
                <p>Resume:{resume ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p>LinkedIn:{linkedin ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p>Mock Interview:{github ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p>GitHub:{mockInterview ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
            </div>
            <OneOnOne
            addComment = {addComment} 
            student = {student}
            />
        </div>
    )
}