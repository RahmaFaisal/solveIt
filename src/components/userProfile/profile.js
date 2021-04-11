import React from 'react'
import './userProfile.style.css'

function ProfileInfo(props)
{
    let statusStyle=props.user.status=='Active' ? "activeStyle" : "inActiveStyle"

    return(
        <div className="test">
            <img src='user.png' className="img"/>
            <div className="profileInfo">
            <p className="bold">{props.user.name}</p>
            <p className="geryTextColor">{props.user.email}</p>
            <p className={statusStyle}> &#x25CF; {props.user.status}</p>
            </div>
        </div>


    )
}


export default ProfileInfo;