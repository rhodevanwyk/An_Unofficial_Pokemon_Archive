import searchIcon from "../assets/circle_logo.png";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center gap-4 w-full flex-nowrap"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Your Pokémon..."
        className="flex-1 min-w-0 focus:outline-none p-4 rounded-xl text-[#4A4A4A] bg-gray-50 font-bold"
      />
      <button type="submit" className="shrink-0 rounded-xl p-2">
        <img src={searchIcon} alt="Search Icon" className="w-12 h-12" />
      </button>
    </form>
  );
}

export default SearchBar;
