import React from 'react'
import DataPagination from '../dataPagination/dataPagination'
import { userController } from "../../controllers/userController";
import ProfileInfo from '../userProfile/profile'
import mapComments from '../../models/comment'
import { Button } from 'react-bootstrap';
import Post from './post'
const tableHeaders=["#","Name","Email Address","body","Created date","Update date"]
function PostInfo (props){

    console.log(props)
    let user=props.location.state.user
    let postId=props.location.state.param.extra.id
    let post=props.location.state.param.item
        return(
            <div>
                <div className="backBtn">
                <Button variant="light"
                onClick={()=>{props.history.goBack()}}
                >Back<img  className="iconStyle" src='back.png'/></Button>
                </div>
                <hr style={{width:'90%',marginTop:'2px'}}/>
                <ProfileInfo user={user}/>
                <Post post={post}/>
                <hr style={{width:'90%'}}/>
            <div>
                <DataPagination 
                requestData={userController.getPostComments} 
                tableHeaders={tableHeaders} 
                id={postId} 
                mapData={mapComments}
                onRowClick={()=>{}}
                title={'Comments'}
               />
            </div>
            </div>
        )
    

}

export default PostInfo;