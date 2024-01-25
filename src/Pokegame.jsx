import Pokedex from "./Pokedex";

export default function Pokegame() {
  defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", exp: 62 },
      { id: 7, name: "Squirtle", type: "water", exp: 63 },
      { id: 11, name: "Metapod", type: "bug", exp: 72 },
      { id: 12, name: "Butterfree", type: "flying", exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", exp: 95 },
      { id: 94, name: "Gengar", type: "poison", exp: 225 },
      { id: 133, name: "Eevee", type: "normal", exp: 65 },
    ],
  };
  let hand1 = [];
  let hand2 = [...defaultProps.pokemon];
  while (hand1.length < hand2.length) {
    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }
  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0);
  console.log(exp1);
  console.log(exp2);
  return (
    <div>
      <h1>Pokegame</h1>
      <p>Total Experience: {exp1}</p>

      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <p>Total Experience: {exp2}</p>
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}
