import React, { useContext, useState } from 'react'
import Post from './Post'
import { PostList as PostData } from '../store/post-list-store'
import Welcome from './Welcome'
import Loader from './Loader'

function PostList() {
    const {postList,addInitialPosts} = useContext(PostData)
    const [isFetching,setIsFetching] = useState(false)

    const handleGetPosts = ()=>{
      setIsFetching(true)
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data) => {
      addInitialPosts(data.posts)
      setIsFetching(false)
    }); 
    }
    
  return (
    <>
    {isFetching && <Loader/>}
    {!isFetching && postList.length ===0 && ( <Welcome getPosts={handleGetPosts}/>
    )}

    {!isFetching && postList.map((post)=>(
        <Post key={post.id} post={post}/>
    ))}
    </>
  )
}

export default PostList