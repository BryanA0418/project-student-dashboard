import { useState } from "react";

export default function OneOnOne({student,addComment}){
    // const [comments,setComments] = useState(student.notes){student:bryan,class:hi}//

    const [newComment,setNewComment] = useState({
        commenter:"",
        comment:"",
    });
    // const [value,setValue] = useState("");

    function handleChange(e){
        // setValue(e.target.value)
        setNewComment({
            //controlled inputs
            ...newComment,[e.target.id]:e.target.value,
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();

        addComment(student,newComment);
    }
    return(
    <div>
        <h2>1-on-1 Notes</h2>
        <form onSubmit={handleSubmit}>
            <label>Commenter Name</label>
            <input name="commenterName" id="commenter" value={newComment.commenter} onInput={handleChange} type="text"/><br/>
            <label>Comment</label>
            <input onChange={handleChange} name="comment" id="comment" type="text" value={newComment.comment}/><br/>
            <input type="submit" value="Add Note"/>
        </form>
        <ul>
            {student.notes.map(({commenter,comment},index) =><li key={`${student.id}-${index}`}>{`${commenter} says, "${comment}"`}</li>)}
        </ul>
    </div>
    )
}