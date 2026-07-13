import { useState } from "react";
import { motion } from "framer-motion";

function PokemonCard({ pokemon }) {
  const [flipped, setFlipped] = useState(false);

  const { name, sprites, types, stats } = pokemon;
  const spriteUrl = sprites.front_default;

  const typeColors = {
    normal: "bg-[#E4E4E7]",
    fire: "bg-[#FED7AA]",
    water: "bg-[#BAE6FD]",
    electric: "bg-[#FEF08A]",
    grass: "bg-[#BBF7D0]",
    ice: "bg-[#CFFAFE]",
    fighting: "bg-[#FECACA]",
    poison: "bg-[#F5D0FE]",
    ground: "bg-[#FDE68A]",
    flying: "bg-[#E0E7FF]",
    psychic: "bg-[#FBCFE8]",
    bug: "bg-[#D9F99D]",
    rock: "bg-[#D6D3D1]",
    ghost: "bg-[#E9D5FF]",
    dragon: "bg-[#C4B5FD]",
    dark: "bg-[#A1A1AA]",
    steel: "bg-[#CBD5E1]",
    fairy: "bg-[#FFE4E6]",
  };

  return (
    <div
      className="relative w-full max-w-[320px] h-88 sm:w-48 sm:h-72 cursor-pointer select-none"
      style={{ perspective: "1000px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      >
        <div
          className="absolute inset-0 rounded-xl bg-gray-50 flex flex-col items-center justify-center p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={spriteUrl}
            alt={name}
            className="w-32 h-32 object-contain drop-shadow-lg"
          />
          <h2 className="capitalize text-2xl font-bold mt-2 text-[#4A4A4A]">
            {name}
          </h2>
          <div className="flex gap-2 mt-3">
            {types.map((t) => (
              <span
                key={t.type.name}
                className={`px-3 py-1 rounded-full text-[#4A4A4A] text-sm font-semibold capitalize ${
                  typeColors[t.type.name] || "bg-[#E4E4E7]"
                }`}
              >
                {t.type.name}
              </span>
            ))}
          </div>
          <p className="text-[#4A4A4A]/50 text-xs mt-4 font-bold">
            Tap To See Stats
          </p>
        </div>

        <div
          className="absolute inset-0 rounded-xl flex flex-col justify-center p-8"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#f0fdf4",
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-[#4A4A4A]">Base Stats</h3>

          {stats && stats.length > 0 ? (
            stats.map((s) => (
              <div key={s.stat.name} className="mb-2">
                <div className="flex justify-between text-sm mb-0.5">
                  <span className="capitalize text-[#4A4A4A] font-semibold">
                    {s.stat.name === "hp" ? "HP" : s.stat.name}
                  </span>
                  <span className="font-bold text-[#4A4A4A]">
                    {s.base_stat}
                  </span>
                </div>
                <div className="w-full bg-[#4A4A4A] rounded-full h-1.5">
                  <div
                    className="bg-[#03C03C] h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min((s.base_stat / 255) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#4A4A4A] font-bold">No Stats Available</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default PokemonCard;
