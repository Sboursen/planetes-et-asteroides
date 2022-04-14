import React from 'react';
import {
  FaUserAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaAngellist,
} from 'react-icons/fa';
import profileImage from '../../images/arcaneMe.png';

export default function About() {
  return (
    <section
      id="contact"
      className="flex flex-col py-4 rounded w-full gap-12 justify-start items-center"
    >
      <h1 className="text-2xl headings">
        <i className="fas fa-address-card" />
        <span className="">Contact me</span>
      </h1>
      <div className="flex flex-row gap-3">
        <div className="w-52">
          <img className="border-r-2" src={profileImage} alt="Author" />
        </div>

        <ul className="flex flex-col gap-3 mt-2 ">
          <li>
            <h3 className="font-bold flex flex-row gap-2">
              <FaUserAlt />
              <span>Soufiane Boursen</span>
            </h3>
          </li>
          <li>
            <a
              className="flex flex-row gap-1 hover:underline"
              href="https://github.com/Sboursen"
            >
              <FaGithub />
              <span>@Sboursen</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1 hover:underline"
              href="https://twitter.com/sboursen_dev"
            >
              <FaTwitter />
              <span>@Sboursen</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1 hover:underline"
              href="https://linkedin.com/in/sboursen"
            >
              <FaLinkedin />
              <span>@sboursen</span>
            </a>
          </li>
          <li>
            <a
              className="flex flex-row gap-1 hover:underline"
              href="https://angel.co/u/sboursen"
            >
              <FaAngellist />
              <span>@sboursen</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
