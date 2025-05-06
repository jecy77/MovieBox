import React from "react";
import Movie from "../components/Movie";
import { dummy } from "../movieDummy";
import { dummyGenre } from "../genreDummy";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import GenreSelector from "../components/GenreSelector";

const genreNameMap = {
  Action: "액션",
  Adventure: "어드벤처",
  Animation: "애니메이션",
  Comedy: "코미디",
  Crime: "범죄",
  Documentary: "다큐멘터리",
  Drama: "드라마",
  Family: "가족",
  Fantasy: "판타지",
  History: "역사",
  Horror: "호러",
  Music: "음악",
  Mystery: "미스테리",
  Romance: "로맨스",
  "Science Fiction": "SF",
  "TV Movie": "TV 영화",
  Thriller: "스릴러",
  War: "전쟁",
  Western: "서부",
};

export default function Movies() {
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const filteredData = dummy.results.filter((item) => {
    const titleMatched = item.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const genreMatched = selectedGenre
      ? item.genre_ids.some((id) => {
          // 1. id로 영어 이름 찾기
          const englishGenreName = dummyGenre.genres.find(
            (g) => g.id === id
          )?.name;
          if (!englishGenreName) return false; // 못 찾으면 제외

          // 2. 영어 이름으로 한글 변환
          const koreanGenreName = genreNameMap[englishGenreName];

          // 3. 선택한 장르와 비교
          return koreanGenreName === selectedGenre;
        })
      : true; // 전체 보기

    return titleMatched && genreMatched;
  });

  return (
    <div>
      <div className="flex p-10 justify-center gap-10">
        <SearchBar
          className="border-2 p-3 rounded"
          setSearchText={setSearchText}
        />
        <GenreSelector
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>
      <div className="movies-container">
        {filteredData.map((item) => {
          return (
            <Movie
              key={item.id}
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}
