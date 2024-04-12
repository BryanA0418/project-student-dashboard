import { useState } from "react";
import MoreInfo from "./MoreInfo";
export default function Student({student}){

    const [showMore,setShowMore] = useState(false);

    const {profilePhoto,username,dob,names:{preferredName,middleName,surname}} = student;
    
    const canGraduate = student.certifications;//newArray array constructor<<

    const onTrack = Object.values(canGraduate);

    const codeWars = student.codewars.current.total > 600 ? true : false;

    onTrack.push(codeWars);
    

    return(
        <li><img src = {profilePhoto}/><h1>{`${preferredName} ${middleName.slice(0,1)} ${surname}`}</h1><p>{username}</p><p><span>Birthday</span>:{dob}</p>

        <a onClick={()=>setShowMore(!showMore)} href="#">{showMore ? "Show less" : "Show more"}</a>
        {showMore && <MoreInfo student = {student}/>}
        <p>{onTrack.every(requirements => requirements) ? "On Track to Graduate": null}</p>
        </li>
    )
}