import { useState } from "react";
import MoreInfo from "./MoreInfo";
export default function BuildAStudent({student}){

    const [showMore,setShowMore] = useState(false);

    const {id,profilePhoto,username,dob,names:{preferredName,middleName,surname}} = student;

    return(
        <li key ={id}><img src = {profilePhoto}/><h1>{`${preferredName} ${middleName.slice(0,1)} ${surname}`}</h1><p>{username}</p><p><span>Birthday</span>:{dob}</p>
        <a onClick={()=>setShowMore(!showMore)} href="#">{showMore ? "Show less" : "Show more"}</a>
        {showMore && <MoreInfo />}
        </li>
    )
}