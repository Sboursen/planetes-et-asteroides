import React from 'react';
import { useSelector } from 'react-redux';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function SearchResults() {
  const bodies = useSelector((state) => state.search.bodiesList);

  return (
    <section className="mt-12 px-1 rounded w-full">
      <h1 className="text-3xl m-4">Search results:</h1>
      <BodiesList bodies={bodies} />
    </section>
  );
}
