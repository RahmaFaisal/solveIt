import{ apiConfig} from './apiConfig'

const Endpoints={
    "getUsers":{
        baseUrl:apiConfig.baseUrl,
        url:`/users?page=!number`,
        method:'GET',
        params:{}
    },
    "getUserDetials":{
        baseUrl:apiConfig.baseUrl,
        url:`/users/!id`,
        method:'GET',
        params:{}
    },
    "getUserPosts":{
        baseUrl:apiConfig.baseUrl,
        url:`/users/!id/posts?page=!number`,
        method:'GET',
        params:{}
    },
    "getPostComments":{
        baseUrl:apiConfig.baseUrl,
        url:`/posts/!id/comments`,
        method:'GET',
        params:{}
    },
}


export default Endpoints;