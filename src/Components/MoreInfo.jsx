import OneOnOne from "./OneOnOne";
import "./MoreInfo.css"

export default function MoreInfo({student,addComment}){
    const {total:currentTotal,lastWeek:currentLastWeek} = student.codewars.current;
    const {total} = student.codewars.goal;

    const {assignments,projects,assessments} = student.cohort.scores;
    const {resume,linkedin,github,mockInterview} = student.certifications;

    return(
        <div className="extras">
        <div className="achievement">
            <div className="achievement__r">
                <h2>Codewars:</h2>
                <p className="achievement__req"><span>Current Total:</span> {currentTotal}</p>
                <p className="achievement__req"><span>Last Week:</span> {currentLastWeek}</p>
                <p className="achievement__req"><span>Goal:</span> {total}</p>
                <p className="achievement__req"><span>Percent of Goal Achieved:</span> {Math.round((currentTotal/total)*100)}%</p>
            </div>
            <div className="achievement__r">
                <h2>Scores:</h2>
                <p className="achievement__req"><span>Assignments:</span>{assignments*100}%</p>
                <p className="achievement__req"><span>Projects:</span>{projects*100}%</p>
                <p className="achievement__req"><span>Assessments:</span>{assessments*100}%</p>
            </div>
            <div className="achievement__r">
                <h2 >Certifications:</h2>
                <p className="achievement__req"><span>Resume:</span> {resume ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p className="achievement__req"><span>LinkedIn:</span>{linkedin ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p className="achievement__req"><span>Mock Interview:</span>{github ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
                <p className="achievement__req"><span>GitHub: </span>{mockInterview ? <span>&#10003;</span> : <span>&#10006;</span>}</p>
            </div>
        </div>
        <OneOnOne
        addComment = {addComment} 
        student = {student}/>
        </div>
    )
}