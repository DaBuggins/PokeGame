import "./Pokecard.css";

export default function Pokecard({ name, id, type, exp }) {
  const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

  let imgSrc = `${POKE_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title"> {name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type} </div>
      <div className="Pokecard-data">Worth {exp} EXP</div>
    </div>
  );
}
