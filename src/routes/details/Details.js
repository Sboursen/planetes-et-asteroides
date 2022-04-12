import { Outlet } from 'react-router-dom';

export default function Details() {
  return (
    <section className="mt-6 px-12 rounded w-full">
      <h1 className="text-3xl">Planet details</h1>
      <Outlet />
    </section>
  );
}
