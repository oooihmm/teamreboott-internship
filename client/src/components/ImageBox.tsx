import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { ImageData } from "../interface/unsplash";

import ImageModal from "./Modal/ImageModal";
import BookmarkButton from "./BookmarkButton";
import { useBookmarkStore } from "../store/useBookmarkStore";

const ImageBoxStyle = styled.div`
	padding: 0px;
	margin: 0 10px 20px 10px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	min-width: 350px;

	min-height: 300px;
	max-height: 400px;
	object-fit: cover;
`;

type ImageProps = {
	image: ImageData;
};

const ImageBox = ({ image }: ImageProps) => {
	const { bookmarks, addBookmark, removeBookmark } = useBookmarkStore();

	const isBookmarked = bookmarks.some(
		(bookmarkedImage) => bookmarkedImage.id === image.id
	);

	const link = image.urls.small;
	const description = image.alt_description;

	const [bookmarkColors, setBookmarkColors] = useState({
		background: isBookmarked ? "#f15151" : "white",
		border: isBookmarked ? "#0000" : "#d1d1d1",
		color: isBookmarked ? "white" : "black",
	});

	const [isModalOpen, setModalOpen] = useState(false);

	const handleClick = () => {
		isBookmarked ? handleRemoveBookmark() : handleAddBookmark();
	};

	const handleAddBookmark = () => {
		addBookmark(image);

		setBookmarkColors({
			background: "#f15151",
			border: "#0000",
			color: "white",
		});
	};

	const handleRemoveBookmark = () => {
		removeBookmark(image);

		setBookmarkColors({
			background: "white",
			border: "#d1d1d1",
			color: "black",
		});
	};

	const handleModalOpen = () => {
		setModalOpen(true);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	return (
		<ImageBoxStyle>
			<BookmarkButton bookmarkColors={bookmarkColors} onClick={handleClick} />
			<Image src={link} alt={description} onClick={handleModalOpen} />
			<ImageModal
				image={image}
				isModalOpen={isModalOpen}
				handleModalClose={handleModalClose}
			/>
		</ImageBoxStyle>
	);
};

export default ImageBox;
