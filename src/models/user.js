import getFormatedDate from './dateModel'

class user {
    
    constructor(user)
    {
        this.id=user.id
        this.name=user.name
        this.email=user.email
        this.gender=user.gender
        this.status=user.status
        this.created_at=getFormatedDate(user.created_at,true)
        this.updated_at=getFormatedDate(user.updated_at,true)

    }

}


function mapUsers(data)
{
    let users=[]

    data.forEach(item=>{
        users.push( new user(item))
    })

    return users;
}


export default mapUsers;