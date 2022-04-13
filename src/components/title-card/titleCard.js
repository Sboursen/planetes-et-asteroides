import React from 'react';
import PropTypes from 'prop-types';

export default function TitleCard(props) {
  const {
    name, type, mass, volume, dependentBodies,
  } = props;
  return (
    <section className="flex flex-row justify-between items-center my-6 mx-12 pb-4">
      <ul>
        <li>{`Name: ${name}`}</li>
        <li>{`Type: ${type}`}</li>
        <li>{`Mass: ${mass}`}</li>
        <li>{`Volume: ${volume}`}</li>
        <li>{`Orbits around: ${dependentBodies}`}</li>
      </ul>
    </section>
  );
}

TitleCard.defaultProps = {
  name: 'Sun',
  type: 'Star',
  mass: {
    massValue: 1.989,
    massExponent: 30,
  },
  volume: {
    volValue: 1.409,
    volExponent: 18,
  },
  dependentBodies: 8,
};

/* eslint-disable react/forbid-prop-types */
TitleCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  mass: PropTypes.object,
  volume: PropTypes.object,
  dependentBodies: PropTypes.number,
};
