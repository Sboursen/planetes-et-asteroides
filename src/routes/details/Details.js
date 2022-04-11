import { Outlet } from 'react-router-dom';

export default function Details() {
  return (
    <section className="mt-6 px-12 overflow-auto rounded min-w-[1024px]">
      <h1 className="text-3xl">Planet details</h1>
      <Outlet />
    </section>
  );
}
