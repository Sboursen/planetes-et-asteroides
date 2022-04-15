import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export default function Footer() {
  const goToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <footer className="w-full bg-slate-600 flex flex-col justify-around items-center py-3">
      <span>
        <span>Published under the </span>
        <a className="hover:text-red-500 underline" href="./LICENSE.md">
          MIT license
        </a>
      </span>
      <button
        type="button"
        onClick={goToTheTop}
        className="hover:text-red-500 underline flex gap-1"
      >
        <BsFillArrowUpCircleFill />
      </button>
    </footer>
  );
}
