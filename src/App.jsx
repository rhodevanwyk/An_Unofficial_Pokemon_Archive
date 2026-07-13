import { useState } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import bgImage from "./assets/bg.jpg";
import pokemonLogo from "./assets/pokemon_logo.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  const fetchPokemon = async (name) => {
    if (!name.trim()) return;

    setPokemon(null);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
      );
      if (!res.ok) {
        throw new Error("Your Pokémon Was Not Found");
      }
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-[#FFCB05] p-16 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img
        src={pokemonLogo}
        alt="Main Pokémon Logo"
        className="w-[30%] mb-10"
      />
      <div className="bg-gray-50/10 backdrop-blur-md border border-white/20 p-10 rounded-xl text-white shadow-xl w-[30%] text-center flex">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={fetchPokemon}
        />
      </div>

      {loading && (
        <p className="mt-8 bg-gray-50/10 backdrop-blur-md border border-white/20 p-2 pr-4 pl-4 rounded text-white shadow-md font-bold">
          Loading...
        </p>
      )}
      {error && (
        <p className="bg-[#FFB1B1]/30 backdrop-blur-md border border-[#FFB1B1]/20 rounded text-[#C23B22] shadow-md p-2 pr-4 pl-4 mt-8 font-bold text-center">
          {error}
        </p>
      )}
      {/* {pokemon && (
          <div className="max-h-80 overflow-y-auto mt-8 p-8 bg-[#121212]/50 rounded-lg text-left">
            <pre className="text-xs text-wrap break-all">
              {JSON.stringify(pokemon, null, 2)}
            </pre>
          </div>
        )} */}
      {pokemon && !loading && !error && (
        <div className="bg-gray-50/10 backdrop-blur-md border border-white/20 p-10 rounded-xl text-white shadow-xl w-[30%] text-center flex mt-8 justify-center">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

export default App;
