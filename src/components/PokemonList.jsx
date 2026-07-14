function PokemonList({ pokemonList, onSelect }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 w-full">
      {pokemonList.map((p) => (
        <div
          key={p.id}
          onClick={() => onSelect(p.name)}
          className="bg-gray-50 rounded-lg p-4 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
        >
          <img
            src={p.sprite}
            alt={p.name}
            className="w-20 h-20 object-contain"
            loading="lazy"
          />
          <span className="capitalize text-xs md:text-sm mt-2 text-[#4A4A4A]">
            {p.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
