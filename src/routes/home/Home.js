import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBodies } from '../../store/home/Home';

export default function Home() {
  const bodies = useSelector((state) => state.bodies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bodies.bodiesList.length) dispatch(getBodies());
  }, []);

  return (
    <section className="mt-6 px-12 rounded w-full">
      <h1 className="text-3xl">Planets</h1>
      <ul>
        {bodies.bodiesList.map((body) => (
          <li key={body.id}>{`id:${body.id}`}</li>
        ))}
      </ul>

    </section>
  );
}
