import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default function Pokedex({ pokemon, isWinner }) {
  let title;
  if (isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand</h1>;
  }
  return (
    <div>
      {title}
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
