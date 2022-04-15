import React from 'react';
import { useSelector } from 'react-redux';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function SearchResults() {
  const bodies = useSelector((state) => state.search.bodiesList);
  const searchName = useSelector((state) => state.search.loading);

  if (!bodies.length) {
    return (
      <section className="mt-12 px-1 rounded w-full">
        <h1 className="text-3xl m-4">{`Search results for: "${searchName}"`}</h1>
        <div className="w-3/4 h-48 flex justify-center items-center text-3xl shadow-sm bg-grid-one shadow-grid-two mx-auto">
          No celestial body starts with the given name
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 px-1 rounded w-full">
      <h1 className="text-3xl m-4">{`Search results for: "${searchName}"`}</h1>
      <BodiesList bodies={bodies} />
    </section>
  );
}
