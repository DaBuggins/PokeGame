import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default function Pokedex({ pokemon, isWinner }) {
  return (
    <div>
      <h1>Pokedex!</h1>
      <p>{isWinner ? "WINNER" : "LOSER"}</p>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.exp}
          />
        ))}
      </div>
    </div>
  );
}
