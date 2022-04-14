import PropTypes from 'prop-types';

export default function TitleCard(props) {
  const {
    name, type, mass, vol,
  } = props;
  return (
    <section className="flex flex-row justify-around items-start py-4 shadow-sm rounded">
      <div className="flex flex-col w-fit items-end">
        <h2 className="text-5xl font-control whitespace-nowrap">{name}</h2>
      </div>
      <ul className="border-2 border-white bg-grid-one p-2 rounded ">
        <li>{`Type: ${type}`}</li>
        <li className="block">
          <span className="inline">Mass: </span>
          <pre className="inline text-base">
            {mass?.massValue}
            x 10
            <sup>{mass?.massExponent}</sup>
            kg
          </pre>
        </li>
        <li className="block">
          <span className="inline">Volume: </span>
          <pre className="inline text-base">
            {vol?.volValue}
            {' '}
            x 10
            <sup>{vol?.volExponent}</sup>
            {' '}
            km
            <sup>3</sup>
          </pre>
        </li>
      </ul>
    </section>
  );
}
TitleCard.defaultProps = {
  name: 'PropTypes.string.isRequired',
  type: 'PropTypes.string.isRequired',
  mass: {},
  vol: {},
};

TitleCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  mass: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  vol: PropTypes.object,
};
