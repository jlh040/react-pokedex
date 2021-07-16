const Pokecard = (props) => {
  return (
    <div className="Pokecard">
      <h5>{props.info.name}</h5>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.info.id}.png`} />
      <h6>Type: {props.info.type}</h6>
      <h6>EXP: {props.info.base_experience}</h6>
    </div>
  )
};

export default Pokecard;