import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  const handleClick = (pokemon)=>{
    console.log(pokemon);
  }
  
  return (
    <>
      {props.pokemon.map(pokemon => (
        <div key={pokemon.id} className="pokemon" onClick={()=>{
          handleClick(pokemon);
        }}>
          <img src={pokemon.img} alt={pokemon.name} />
          <div>
            <h3>{pokemon.name}</h3>
            {pokemon.next_evolution &&
              pokemon.next_evolution.map(e => <p key={e.num}>{e.name}</p>)}
          </div>
        </div>
      ))}
    </>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.arrayOf(
        PropTypes.oneOf([
          'Grass',
          'Poison',
          'Fire',
          'Flying',
          'Water',
          'Bug',
          'Normal',
          'Electric',
          'Psychic',
          'Ground',
          'Fighting',
          'Rock',
          'Ice',
          'Ghost',
          'Dragon'
        ])
      ),
      next_evolution: PropTypes.arrayOf(
        PropTypes.shape({
          num: PropTypes.string,
          name: PropTypes.string
        })
      )
    })
  )
};

Pokemon.defaultProps = {
  pokemon: []
};

export default Pokemon;
