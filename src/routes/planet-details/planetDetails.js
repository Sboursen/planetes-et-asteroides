import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TitleCard from '../../components/title-card/titleCard';
import { getBody } from '../../store/details/Details';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function PlanetDetails() {
  const params = useParams();
  const bodies = useSelector((state) => state.bodies.bodiesList);
  const { bodyId } = params;
  const bodyDetails = useSelector((state) => state.body.body);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBody(bodyId));
  }, [bodyId]);

  const {
    englishName: name,
    bodyType: type,
    mass,
    vol,
    moons: moonsRel,
  } = bodyDetails;

  const getMoons = (moonsRel, bodies) => {
    if (moonsRel?.length) {
      const moonsIds = moonsRel.map((moonRel) => moonRel.rel.split('/').at(-1));
      const moons = bodies.filter((body) => moonsIds.includes(body.id));
      return <BodiesList bodies={moons} />;
    }

    return <></>;
  };

  return (
    <section className="py-4 px-2 rounded w-full">
      <TitleCard name={name} type={type} mass={mass} vol={vol} />
      {getMoons(moonsRel, bodies)}
    </section>
  );
}
