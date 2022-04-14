import React from 'react';

export default function SunCard() {
  const massValue = 1.989;
  const massExponent = 30;
  const volValue = 1.409;
  const volExponent = 18;

  return (
    <div className="flex flex-row justify-around items-start shadow-sm rounded">
      <div className="flex flex-col w-fit items-end">
        <h2 className="text-5xl font-control whitespace-nowrap">The Sun</h2>
        <h3 className="text-xl">8 planets</h3>
      </div>
      <ul className="border-2 border-white bg-grid-one rounded ">
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
            {' '}
            km
            <sup>3</sup>
          </pre>
        </li>
      </ul>
    </div>
  );
}
