'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link href="/">
      <Image
        src="/k-logo.svg"
        alt="logo"
        width={60}
        height={60}
        className={`${theme === 'dark' ? 'filter invert' : ''}`}
      />
    </Link>
  );
};

export default Logo;
