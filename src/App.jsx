// App.js
import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar';
import Cards from './Component/Cards';
import "./App.css"
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }

    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {posts.map(post => (
          <Cards key={post.id} userid={post.userId} that={post.title} title={post.title} description={post.body} />
        ))}
      </div>
    </>
  );
}

export default App;
