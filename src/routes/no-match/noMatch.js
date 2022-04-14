import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="mt-6 flex flex-col items-center gap-6 rounded w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl">404 not found</h1>
        <iframe
          title="lost in space"
          src="https://giphy.com/embed/3o7btZ3T6y3JTmjg4w"
          width="480"
          height="270"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
        />
        <p>
          <a
            className=" self-stretch"
            href="https://giphy.com/gifs/epitaphrecords-music-video-3o7btZ3T6y3JTmjg4w"
          >
            via GIPHY
          </a>
        </p>
      </div>
      <Link className="text-3xl underline hover:text-red-500" to="/">
        GO BACk TO HOME
      </Link>
    </section>
  );
}
