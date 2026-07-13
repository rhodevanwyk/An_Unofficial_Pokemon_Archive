import { useState } from "react";
import SearchBar from "./components/SearchBar";

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
    <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat text-[#FFCB05] p-16 flex flex-col justify-center items-center">
      <img
        src="src/assets/pokemon_logo.png"
        alt="Main Pokémon Logo"
        className="w-[30%] mb-10"
      />
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-xl text-white shadow-xl w-[30%] text-center flex">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={fetchPokemon}
      />
      </div>

        {loading && <p className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 p-2 pr-4 pl-4 rounded text-white shadow-xl font-bold">Loading...</p>}
        {error && (
          <p className="bg-[#FFB1B1]/30 backdrop-blur-md border border-[#FFB1B1]/20 rounded text-[#C23B22] shadow-xl p-2 pr-4 pl-4 mt-8 font-bold text-center">{error}</p>
        )}
        {pokemon && (
          <div className="max-h-80 overflow-y-auto mt-8 p-8 bg-[#121212]/50 rounded-lg text-left">
            <pre className="text-xs text-wrap break-all">
              {JSON.stringify(pokemon, null, 2)}
            </pre>
          </div>
        )}
    </div>
  );
}

export default App;