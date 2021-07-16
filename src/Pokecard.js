import './Pokecard.css';

const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{props.info.name}</h4>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.info.id}.png`} />
      <h5 className="Pokecard-type">Type: {props.info.type}</h5>
      <h5 className="Pokecard-exp">EXP: {props.info.base_experience}</h5>
    </div>
  )
};

export default Pokecard;