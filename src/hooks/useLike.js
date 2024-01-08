import React, { useState } from "react";

export const useLike = (shortId) => {
  const randomNum = Math.floor(Math.random() * 100) + 1;

  const [likes, setLikes] = useState(randomNum);
  const [liked, setLiked] = useState(false);

  const likesGif = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
      if (shortId === undefined) {
        console.info("👍🏽 Likeaste un gif 👍🏽");
      } else {
        console.info(`♥️ Guardaste como favorito a ${shortId} ♥️`);
      }
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
    }
  };
  return {
    likes,
    liked,
    likesGif,
  };
};
