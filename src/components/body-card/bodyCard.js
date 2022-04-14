import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

export default function BodyCard(props) {
  const {
    bodyId: id, name, moonsNumber, orbitsAround, handleClick,
  } = props;

  return (
    <div className="relative flex flex-col gap-3 p-5 w-full">
      <button
        type="button"
        className="absolute top-2 right-2 hover:text-header hover:bg-white rounded-full"
        onClick={() => handleClick(id.toLowerCase())}
      >
        <BsArrowRightCircle />
      </button>
      <h2 className="text-2xl font-medium w-full text-center">{name}</h2>
      <div className="w-full flex flex-row justify-around items-center">
        <span className="whitespace-nowrap">
          {`${moonsNumber || 'No'} moons`}
        </span>
        <div className="group hover:animate-spin hover:cursor-default whitespace-nowrap rounded px-2">
          <div className="relative w-20 h-20 rounded-full border-white border-2 flex justify-center items-center">
            <span className="flex justify-center items-baseline pt-1">
              {orbitsAround.toUpperCase()}
            </span>
            <span className="absolute group-hover:animate-ping top-[7px] right-[7px] p-1 rounded-full bg-white hover:bg-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

BodyCard.propTypes = {
  bodyId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  moonsNumber: PropTypes.number.isRequired,
  orbitsAround: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
