import React from 'react'
import './post.style.css'

function Post(props) {
  
    console.log(props)
    let {post}=props
    return(
        <div className="postWarrper">
              <p className="postTitle">{post.title}</p>
            <div className="imageWithDes">
            <img src='tip.png' className="tipImage"/>
            <p className="grayColor">{post.body}</p>
            </div>
        </div>
    )
}


export default Post;