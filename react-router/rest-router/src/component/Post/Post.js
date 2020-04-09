import React, { useState, useEffect } from "react";
import { API_REST_META } from "../Config/Constant";

const Post = () => {
  const initialState = [];
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(API_REST_META.POST_ENDPOINT);
      const posts = await res.json();
      setPosts(posts);
    }
    fetchPosts();
  }, []);

  return (
    <ul>
      {posts.length > 0 &&
        posts.map((p) => {
          return (
            <li key={p.postId}>
              {p.id}  -  {p.title}  -  {p.body}
            </li>
          );
        })}
    </ul>
  );
};

export default Post;
