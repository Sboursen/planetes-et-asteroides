import React from 'react';
import { useSelector } from 'react-redux';

export default function SunCard() {
  const bodies = useSelector((state) => state.bodies.bodiesList);
  const massValue = 1.989;
  const massExponent = 30;
  const volValue = 1.409;
  const volExponent = 18;

  const groupByType = (bodies) => {
    const types = new Map();
    bodies.forEach((body) => {
      const type = body.bodyType;
      if (types.has(type)) {
        types.set(type, types.get(type) + 1);
      } else {
        types.set(type, 1);
      }
    });
    return Array.from(types);
  };

  return (
    <div className="flex flex-row justify-around items-start shadow-sm rounded py-2">
      <div className="flex flex-col w-fit items-start">
        <h2 className="text-5xl font-control whitespace-nowrap">The Sun</h2>
        <ul className="flex flex-col pl-4">
          {groupByType(bodies).map((element, index) => {
            if (element[1] >= 2) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index} className="w-fit">
                  {`${element[0]} ${element[1]}`}
                </li>
              );
            }
            return <></>;
          })}
        </ul>
      </div>
      <ul className="border-2 border-white bg-grid-one rounded p-3">
        <li>Type: Star</li>
        <li className="block">
          <span className="inline">Mass: </span>
          <pre className="inline text-base">
            {massValue}
            x 10
            <sup>{massExponent}</sup>
            kg
          </pre>
        </li>
        <li className="block">
          <span className="inline">Volume: </span>
          <pre className="inline text-base">
            {volValue}
            {' '}
            x 10
            <sup>{volExponent}</sup>
            km
            <sup>3</sup>
          </pre>
        </li>
      </ul>
    </div>
  );
}
