import React, { createContext, useReducer } from 'react'

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    addInitialPosts:()=>{},
    deletePost:()=>{}
})

const postListReducer = (currPostList,action) => {
    let newPostList = currPostList;
    if(action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    } else if(action.type === 'ADD_INITIAL_POSTS'){
        newPostList = action.payload.posts;
    }

    return newPostList;
}

const PostListProvider = ({children})=>{
    const [postList,dispatchpostList] = useReducer(postListReducer,[])
    const addPost = ()=>{}

    const addInitialPosts = (posts)=>{
        
        dispatchpostList({
            type:'ADD_INITIAL_POSTS',
            payload:{
                posts,
            }
        });
    }

    const deletePost = (postId)=>{

        dispatchpostList({
            type:'DELETE_POST',
            payload:{
                postId,
            }
        });
    }

    return (
        <PostList.Provider value={{postList,addPost,addInitialPosts,deletePost}}>
            {children}
        </PostList.Provider>
    )
}



export default PostListProvider;