import React, { useState, useEffect } from "react";
import { API_REST_META } from "../Config/Constant";

const Photo = () => {
  const initialState = [];
  const [photos, setPhotos] = useState(initialState);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch(API_REST_META.PHOTO_ENDPOINT);
      const photos = await res.json();
      setPhotos(photos);
    }
    fetchPhotos();
  }, []);

  return (
    <ul>
      {photos.length > 0 &&
        photos.map((p) => {
          return (
            <li key={p.albumId}>
              {p.id}  -  {p.title}  -  {p.url} <br />
              <img src={p.thumbnailUrl} alt={p.title}></img>
            </li>
          );
        })}
    </ul>
  );
};

export default Photo;
