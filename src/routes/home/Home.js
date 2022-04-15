import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiLoaderAlt } from 'react-icons/bi';
import { getBodies } from '../../store/home/Home';
import SunCard from '../../components/sun-card/sunCard';
import BodiesList from '../../components/bodies-list/bodiesList';

export default function Home() {
  const bodies = useSelector((state) => state.bodies.bodiesList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bodies.length) dispatch(getBodies());
  }, []);

  if (!bodies.length) {
    return (
      <section className="mt-12 px-1 rounded w-full">
        <div className="w-5/6 h-48 flex flex-col justify-around items-center shadow-sm rounded p-2 shadow-gray-600 mx-auto">
          <h1 className="text-7xl text-center">Loading the universe</h1>
          <span className="animate-spin flex flex-row justify-center text-7xl">
            <BiLoaderAlt />
          </span>
        </div>

        <ul className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center p-3 gap-3">
          <li className="block w-full h-full even:bg-grid-one odd:bg-grid-two">
            <div className="animate-pulse flex space-x-4 p-2 ">
              <div className="rounded-full bg-white h-10 w-10" />
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-white rounded" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-white rounded col-span-2" />
                    <div className="h-2 bg-white rounded col-span-1" />
                  </div>
                  <div className="h-2 bg-white rounded" />
                </div>
              </div>
            </div>
          </li>
          <li className="block w-full h-full even:bg-grid-one odd:bg-grid-two">
            <div className="animate-pulse flex space-x-4 p-2">
              <div className="rounded-full bg-white h-10 w-10" />
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-white rounded" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-white rounded col-span-2" />
                    <div className="h-2 bg-white rounded col-span-1" />
                  </div>
                  <div className="h-2 bg-white rounded" />
                </div>
              </div>
            </div>
          </li>
          <li className="block w-full h-full even:bg-grid-one odd:bg-grid-two">
            <div className="animate-pulse flex space-x-4 p-2">
              <div className="rounded-full bg-white h-10 w-10" />
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-white rounded" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-white rounded col-span-2" />
                    <div className="h-2 bg-white rounded col-span-1" />
                  </div>
                  <div className="h-2 bg-white rounded" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-3 py-4 rounded w-full">
      <SunCard />
      <BodiesList bodies={bodies} />
    </section>
  );
}
