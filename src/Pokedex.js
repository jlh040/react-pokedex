import pokemon from './pokemon';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon }) => (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      pokemon.map(obj => <Pokecard key={obj.id} info={obj} />)
    </div>
);

export default Pokedex;