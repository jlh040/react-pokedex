import './Pokecard.css';

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h4>{props.info.name}</h4>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.info.id}.png`} />
      <h5>Type: {props.info.type}</h5>
      <h5>EXP: {props.info.base_experience}</h5>
    </div>
  )
};

export default Pokecard;