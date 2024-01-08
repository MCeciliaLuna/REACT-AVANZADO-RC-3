import React, { useState } from "react";

export const useLike = (shortId) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  const [likes, setLikes] = useState(randomNum);
  const [liked, setLiked] = useState(false);

  const likesGif = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
      console.log(shortId)
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
      console.log(shortId)
    }
  };
  return {
    likes,
    liked,
    likesGif,
  };
};
