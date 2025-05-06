export default function GenreSelector({ selectedGenre, setSelectedGenre }) {
  const genres = [
    "액션",
    "어드벤처",
    "애니메이션",
    "코미디",
    "범죄",
    "다큐멘터리",
    "드라마",
    "가족",
    "판타지",
    "역사",
    "호러",
    "음악",
    "미스테리",
    "로맨스",
    "SF",
    "스릴러",
    "전쟁",
  ];

  return (
    <div>
      <select
        value={selectedGenre}
        className="border-2 border-black p-3 rounded"
        style={{ backgroundColor: "black", color: "white" }}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
