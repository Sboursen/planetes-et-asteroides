import React from 'react';
import { useSelector } from 'react-redux';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function SearchResults() {
  const bodies = useSelector((state) => state.search.bodiesList);

  return (
    <section className="mt-6 px-12 rounded w-full justify-self-stretch">
      <h1 className="text-3xl">searching</h1>
      <BodiesList bodies={bodies} />
    </section>
  );
}
