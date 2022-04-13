import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBodies } from '../../store/home/Home';
import SunCard from '../../components/sun-card/sunCard';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function Home() {
  const bodies = useSelector((state) => state.bodies.bodiesList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bodies.length) dispatch(getBodies());
  }, []);

  return (
    <section className="py-4 px-2 rounded w-full">
      <SunCard />
      <BodiesList bodies={bodies} />
    </section>
  );
}
