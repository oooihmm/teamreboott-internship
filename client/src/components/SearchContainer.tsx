import React from "react";
import styled from "styled-components";
import SearchBox from "./SearchBox";

const SearchImage = styled.div`
	width: 100%;
	img {
		width: 100%;
		height: 600px;
		object-fit: cover;
	}
	position: relative;
`;

const SearchContents = styled.div`
	position: absolute;
	top: 70%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	gap: 10px;
`;

const SearchTitle = styled.span`
	font-size: 45px;
	font-weight: 900;
`;

type SearchContainerProps = {
	background: string;
};

const SearchContainer = ({ background }: SearchContainerProps) => {
	return (
		<>
			<SearchImage>
				<img src={background} alt="background"></img>{" "}
				<SearchContents>
					<SearchTitle>Unsplash</SearchTitle>
					<span>인터넷의 시각 자료 출처입니다.</span>
					<span>모든 지역에 있는 크리에이터들의 지원들 받습니다.</span>
					<SearchBox />
				</SearchContents>
			</SearchImage>
		</>
	);
};

export default SearchContainer;
