import React,{useEffect,useState} from 'react'
import DataPagination from '../dataPagination/dataPagination'
import { userController } from "../../controllers/userController";
import mapPosts from '../../models/post'
import ProfileInfo from './profile'
import { Button } from 'react-bootstrap';
import getFormatedDate from '../../models/dateModel'
import './userProfile.style.css'

const tableHeaders=["Post ID","Title","Body"]
function UserProfile (props){

    let userId=props.location.state.extra.id
    const [user,setUser]=useState({})
    const [metaInfo,setMetaInfo]=useState({})
    
    useEffect(() => {
        userController.getUserDetials({"id":userId}).then(res=>{
            let {data}=res
            setUser(data)    
        })
    },[userId])


       function renderSubInfo(obj)
        {
            return(
            <div className="subInfo col-xl-1 col-sm-2 col-6">
                    <p>
                        {obj.title.toUpperCase()}
                    </p>
                    <p className={obj.className}>
                        {obj.subTitle}
                    </p>
                </div>)
        }


      function onRowClick(param)
        {
            props.history.push('/postinfo',{user:user,param})
        }
    
        return(
            
            <div>
                 <div className="backBtn">
                <Button variant="light"
                onClick={()=>{props.history.goBack()}}
                >Back<img  className="iconStyle" src='back.png'/></Button>
                </div>
                <hr style={{width:'90%',marginTop:'2px'}}/>
                <ProfileInfo user={user}/>
                <div className="test">
                   {renderSubInfo({"title":"Total \nno. of posts","subTitle":metaInfo.total,"className":"blueColor"})} 
                   {renderSubInfo({"title":"current page \nno. of posts","subTitle":metaInfo.total<20 ? metaInfo.total : 20,"className":"red"})}
                   {renderSubInfo({"title":"user \ncreation date","subTitle":getFormatedDate(user.created_at,false)})}
                   {renderSubInfo({"title":"user \nupadted date","subTitle":getFormatedDate(user.updated_at,false)})}
                </div>
            <div>
                <DataPagination 
                requestData={userController.getUserPosts} 
                tableHeaders={tableHeaders} 
                id={userId} 
                mapData={mapPosts}
                setMetaInfo={setMetaInfo}
                onRowClick={onRowClick}
                title={'USER POSTS'}
               />
            </div>
            </div>
        )
    

}

export default UserProfile;