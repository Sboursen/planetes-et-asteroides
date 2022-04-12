import { useParams } from 'react-router-dom';

export default function PlanetDetails() {
  const params = useParams();
  return (
    <h2>
      <strong>Planet: </strong>
      <span>{params.planetId}</span>
    </h2>
  );
}
