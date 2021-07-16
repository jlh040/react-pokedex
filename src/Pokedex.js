import pokemon from './pokemon';

const Pokedex = ({ pokemon }) => {
  return (
    pokemon.map(obj => <Pokecard key={obj.id} info={obj} />)
  )
}