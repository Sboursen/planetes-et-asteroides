import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import BodyCard from '../body-card/bodyCard';


export default function BodiesList(props) {
  const { bodies } = props;
  const navigate = useNavigate();

  const handleBodyCardClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <ul
      className={
        'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        + 'gap-1 items-center justify-items-center'
      }
    >
      {bodies.map((body) => (
        <li
          key={body.id}
          className="block w-full h-full even:bg-grid-one odd:bg-grid-two"
        >
          <BodyCard
            name={body.englishName}
            moonsNumber={body.moons ? body.moons.length : 0}
            orbitsAround={body.aroundPlanet ? body.aroundPlanet.planet : 'Sun'}
            handleClick={(id) => handleBodyCardClick(id)}
          />
        </li>
      ))}
    </ul>
  );
}

BodiesList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bodies: PropTypes.array.isRequired,
};
