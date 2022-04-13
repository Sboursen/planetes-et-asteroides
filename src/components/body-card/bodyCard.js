import React from 'react';
import PropTypes from 'prop-types';

export default function BodyCard(props) {
  const { name, moonsNumber, orbitsAround, handleClick } = props;

  return (
    <button
      type="button"
      className="flex flex-col gap-3 p-3 w-full"
      onClick={handleClick}
    >
      <h2 className="text-2xl font-medium w-full text-center">{name}</h2>
      <div className="w-full flex flex-row justify-around">
        <span className="whitespace-nowrap">{`${moonsNumber} moons`}</span>
        <span className="whitespace-nowrap">{`around ${orbitsAround}`}</span>
      </div>
    </button>
  );
}

BodyCard.propTypes = {
  name: PropTypes.string.isRequired,
  moonsNumber: PropTypes.number.isRequired,
  orbitsAround: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
