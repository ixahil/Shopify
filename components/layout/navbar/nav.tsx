'use client';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  menu: Menu[];
};

const Nav = ({ menu }: Props) => {
  const pathName = usePathname();

  return (
    <nav className="mx-auto flex w-full items-center border-t-2 border-accent">
      {menu.length ? (
        <ul className="hidden justify-evenly text-sm md:flex md:w-full md:items-center">
          {menu.map((item: Menu) => (
            <Link
              key={item.title}
              href={item.path}
              className={`h-full w-full text-center text-neutral-500 underline-offset-4 transition duration-150 ease-out hover:bg-accent 	 hover:text-text-primary hover:underline hover:ease-in  dark:text-white dark:hover:text-neutral-300 ${
                item.title === 'SALE' ? 'text-text-primary' : ''
              }${pathName === item.path && 'bg-accent text-text-primary underline'}`}
            >
              <li
                key={item.title}
                className={`dark:border-darkBg  border-r-2 py-4 text-center dark:text-white ${
                  item.title === 'SALE' ? 'bg-accent text-text-primary' : ''
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Nav;
