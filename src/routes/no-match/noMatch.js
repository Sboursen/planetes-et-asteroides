import { Link } from 'react-router-dom';
import gif from '../../images/lost.gif';

export default function Home() {
  return (
    <section className="mt-6 flex flex-col items-center gap-6 rounded w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">404 not found</h1>
        <iframe
          title="lost in space"
          src={gif}
          width="480"
          height="270"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
        />
      </div>
      <Link className="text-3xl underline hover:text-red-500" to="/">
        GO BACk TO HOME
      </Link>
    </section>
  );
}
