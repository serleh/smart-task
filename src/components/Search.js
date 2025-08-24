export default function Search({ search, setSearch }) {
  return (
    <div className="container search">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
