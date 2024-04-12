import { useState } from "react";

export default function OneOnOne({student}){
    const [comments,setComments] = useState(student.notes)

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
        // setNewComment({commenter : e.target.commenterName.value,
        // comment : e.target.comment.value,})
        // student.notes.push(newComment)
        setComments([...comments,newComment])
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
            {comments.map(({commenter,comment}) =><li>{`${commenter} says, "${comment}"`}</li>)}
        </ul>
    </div>
    )
}