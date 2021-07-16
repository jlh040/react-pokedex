import Pokecard from './Pokecard';
import pokemonArr from './pokemon';

const Pokedex = ({ pokemon=pokemonArr }) => (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      {pokemon.map(obj => <Pokecard key={obj.id} info={obj} />)}
    </div>
);

export default Pokedex;