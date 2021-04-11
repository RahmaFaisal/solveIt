class post {
    
    constructor(post)
    {
        this.id=post.id
        this.title=post.title
        this.body=post.body
    }

}


function mapPosts(data)
{
    let posts=[]

    data.forEach(item=>{
        posts.push( new post(item))
    })

    return posts;
}


export default mapPosts;