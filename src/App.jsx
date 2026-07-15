import { useState, useCallback, useRef } from "react";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonCard";
import PokemonList from "./components/PokemonList";
import bgImage from "./assets/bg.jpg";
import pokemonLogo from "./assets/pokemon_logo.png";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = "https://pokeapi.co/api/v2";
const INITIAL_LIMIT = 1;

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [allPokemon, setAllPokemon] = useState([]);
  const [showList, setShowList] = useState(false);
  const [listLoading, setListLoading] = useState(false);

  const abortControllerRef = useRef(null);

  const fetchPokemon = useCallback(async (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setPokemon(null);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/pokemon/${trimmed.toLowerCase()}`, {
        signal: controller.signal,
      });
      if (!res.ok) {
        throw new Error("Your Pokémon Was Not Found");
      }
      const data = await res.json();
      setPokemon(data);
      setShowList(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  }, []);

  const fetchAllPokemon = useCallback(async () => {
    if (allPokemon.length > 0) {
      setShowList((prev) => !prev);
      return;
    }

    setListLoading(true);
    try {
      const countRes = await fetch(`${API_BASE}/pokemon?limit=${INITIAL_LIMIT}`);
      const countData = await countRes.json();

      const res = await fetch(`${API_BASE}/pokemon?limit=${countData.count}`);
      const data = await res.json();

      const list = data.results.map((p) => {
        const id = p.url.split("/").filter(Boolean).pop();
        return {
          id: Number(id),
          name: p.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        };
      });

      setAllPokemon(list);
      setShowList(true);
    } catch (err) {
      console.error("Failed to fetch Pokémon list", err);
      setError("Could not load Pokémon list");
    } finally {
      setListLoading(false);
    }
  }, [allPokemon.length]);

  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      fetchPokemon(term);
    },
    [fetchPokemon],
  );

  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat text-[#FFCB05] p-8 sm:p-16 flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img
        src={pokemonLogo}
        alt="Pokémon Logo"
        className="w-full sm:w-[40%] max-w-130 mb-10"
      />

      <div className="bg-gray-50/10 backdrop-blur-md border border-gray-50/20 p-6 sm:p-10 rounded-xl text-gray-50 shadow-xl w-full max-w-3xl text-center flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={fetchAllPokemon}
          disabled={listLoading}
          className="bg-gray-50/10 backdrop-blur-md border border-gray-50/20 p-2 pr-4 pl-4 rounded-xl text-gray-50 font-bold h-14 gray-50 text-nowrap w-full lg:w-fit md:w-fit flex justify-center items-center disabled:opacity-50"
        >
          {listLoading
            ? "Loading..."
            : showList
              ? "Hide Pokémon List"
              : "Browse Pokémon"}
        </button>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>

      {loading && (
        <p className="mt-8 bg-gray-50/10 backdrop-blur-md border border-gray-50/20 p-2 pr-4 pl-4 rounded text-gray-50 shadow-md font-bold">
          Loading...
        </p>
      )}

      {error && (
        <p className="bg-[#FFB1B1]/30 backdrop-blur-md border border-[#FFB1B1]/20 rounded text-[#C23B22] shadow-md p-2 pr-4 pl-4 mt-8 font-bold text-center">
          {error}
        </p>
      )}

      <AnimatePresence>
        {showList && !loading && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="bg-gray-50/10 backdrop-blur-md border border-gray-50/20 p-6 sm:p-10 rounded-xl text-gray-50 shadow-xl w-full max-w-3xl text-center flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <PokemonList
              pokemonList={allPokemon}
              onSelectPokemon={(name) => {
                setShowList(false);
                handleSearch(name);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {pokemon && !loading && !error && !showList && (
        <div className="bg-gray-50/10 backdrop-blur-md border border-gray-50/20 p-6 sm:p-10 rounded-xl text-gray-50 shadow-xl w-full max-w-3xl text-center flex mt-8 justify-center">
          <PokemonCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
}

export default App;
