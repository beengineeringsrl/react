import React, { useState, useEffect } from "react";
import { API_REST_META } from "../Config/Constant";

const Comment = () => {
  const initialState = [];
  const [comments, setComment] = useState(initialState);

  useEffect(() => {
    async function fetchComment() {
      const res = await fetch(API_REST_META.USER_ENDPOINT);
      const comments = await res.json();
      setComment(comments);
    }
    fetchComment();
  }, []);

  return (
    <ul>
      {comments.length > 0 &&
        comments.map((c) => {
          return (
            <li key={c.id}>
              {c.id}  -  {c.name}  -  {c.email}   -  {c.body}
            </li>
          );
        })}
    </ul>
  );
};

export default Comment;
