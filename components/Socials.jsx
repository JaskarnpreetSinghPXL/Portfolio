'use client';

import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.linkedin.com/in/karntarimie/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/JaskarnpreetSinghPXL',
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.facebook.com/karn.tarimie',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/karn_tarimie/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
