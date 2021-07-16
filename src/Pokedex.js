import Pokecard from './Pokecard';
import pokemonArr from './pokemon';
import './Pokedex.css';

const Pokedex = ({ pokemon=pokemonArr }) => (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-cards-container">
        {pokemon.map(obj => <Pokecard key={obj.id} info={obj} />)}
      </div>
    </div>
);

export default Pokedex;