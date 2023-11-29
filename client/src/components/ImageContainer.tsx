import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { imageData } from "../interface/unsplash";

import Bookmark from "../style/bookmark";

const Image = styled.div`
  img {
    width: 100%;
    min-width: 350px;

    min-height: 300px;
    max-height: 400px;
    object-fit: cover;
  }

  padding: 0px;
  margin: 0 10px 20px 10px;
  position: relative;
`;

type ImageProps = {
  image: imageData;
  bookmark: imageData[];
  handleBookmark: (image: imageData) => void;
};

const ImageContainer = ({ image, bookmark, handleBookmark }: ImageProps) => {
  const isBookmarked = bookmark.some(
    (bookmarkedImage) => bookmarkedImage.id === image.id
  );

  const [bookmarkColors, setBookmarkColors] = useState({
    background: isBookmarked ? "#f15151" : "white",
    color: isBookmarked ? "white" : "black",
  });

  const link = image.urls.small;
  const description = image.description;

  const handleClick = () => {
    setBookmarkColors({
      background: "#f15151",
      color: "white",
    });
    handleBookmark(image);
  };

  return (
    <Image>
      <Bookmark
        $background={bookmarkColors.background}
        $color={bookmarkColors.color}
        onClick={handleClick}
      >
        ♥︎
      </Bookmark>
      <img src={link} alt={description} />
    </Image>
  );
};

export default ImageContainer;