'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      {theme === 'light' ? (
        <button onClick={() => setTheme('dark')}>
          <MoonIcon className="h-5 w-5" />
        </button>
      ) : (
        <button onClick={() => setTheme('light')}>
          <SunIcon className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
