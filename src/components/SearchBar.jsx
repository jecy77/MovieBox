export default function SearchBar({ setSearchText, className }) {
  return (
    <div>
      <input
        className={className}
        style={{ border: "2px solid #3a3659" }}
        placeholder="제목을 검색하세요"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
    </div>
  );
}
