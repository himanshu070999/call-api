import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [posts,setPosts]=useState([])
useEffect(()=>{
  const url='https://jsonplaceholder.typicode.com/posts';
  fetch(url).then(resp=>resp.json())
  .then(resp=>setPosts(resp))
},[])
  return (
    <div className="App">
      <h1 align="center">Call-Api</h1>
      {
        posts.map(post=><div><p>{post.title}</p></div>)
      }
    </div>
  );
}

export default App;
