import React from 'react';

const getPosts = async()=>{
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // return res.json()
  
  try{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
  }

  catch(err){
    throw new Error("Failed to fetch posts");
  }
} 
  
const PostPage = async() => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const getPost = await res.json()
  const getPost = await getPosts()
  return (
    <div>
      <h1>Post length:{getPost.length}</h1>
    </div>
  );
};

export default PostPage;