import getFormatedDate from './dateModel'

class comment {
    
    constructor(comment)
    {
        this.id=comment.id
        this.name=comment.name
        this.email=comment.email
        this.body=comment.body
        this.created_at=getFormatedDate(comment.created_at,true)
        this.updated_at=getFormatedDate(comment.updated_at,true)

    }

}


function mapComments(data)
{
    let comments=[]

    data.forEach(item=>{
        comments.push( new comment(item))
    })

    return comments;
}


export default mapComments;