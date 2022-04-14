import { Outlet } from 'react-router-dom';

export default function Details() {
  return (
    <section className="mt-6 rounded w-full">
      <Outlet />
    </section>
  );
}
