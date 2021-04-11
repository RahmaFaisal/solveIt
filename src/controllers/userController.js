import { apirequest } from '../Api/apiRequest'


class UserController{

    constructor(){}

    getUsers(obj)
    {
        return apirequest.makeRequest("getUsers",obj)
    }
    getUserPosts(obj)
    {
        return apirequest.makeRequest("getUserPosts",obj)
    }
    getUserDetials(obj){
        return apirequest.makeRequest("getUserDetials",obj)
    }
    getPostComments(obj)
    {
        return apirequest.makeRequest("getPostComments",obj)
    }
}


export const userController=new UserController()