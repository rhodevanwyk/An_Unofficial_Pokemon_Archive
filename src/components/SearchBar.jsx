function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Your Pokémon..."
        className="flex-1 focus:outline-none p-4 rounded-xl text-[#4A4A4A] bg-gray-50 font-bold w-[80%]"
      />
      <button type="submit" className="ml-4">
        {/* <i className="fa-solid fa-magnifying-glass font-bold"></i> */}
        <img
          src="src/assets/circle_logo.png"
          alt="Search Icon"
          className="w-16"
        />
      </button>
    </form>
  );
}

export default SearchBar;