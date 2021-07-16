import pokemon from './pokemon';

const Pokedex = ({ pokemon }) => {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      pokemon.map(obj => <Pokecard key={obj.id} info={obj} />)
    </div>
  )
}