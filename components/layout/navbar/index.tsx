import { StarIcon } from '@heroicons/react/24/outline';
import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import LogoSquare from 'components/logo-square';
import ThemeSwitcher from 'components/theme/themeSwitcher';
import { getMenu } from 'lib/shopify';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
import Nav from './nav';
import Search from './search';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu = await getMenu('Categories');

  return (
    <>
      <header className="relative mx-auto flex w-full flex-col items-center justify-between">
        <div className="bg-darkBg flex h-10 w-full justify-center overflow-hidden whitespace-nowrap py-2 text-text-primary">
          <div className="slider flex w-full justify-between gap-6">
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>

            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
            <h2 className="flex gap-4">
              <StarIcon className="h-6 w-6" fill="yellow" />
              FREE SHIPPING ON ORDERS OVER 2000 Rupess!
            </h2>
          </div>
        </div>
        <div className="flex w-4/5 items-center justify-between">
          <div className="block flex-none md:hidden">
            <MobileMenu menu={menu} />
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-full md:w-1/4">
              <Link
                href="/"
                className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
              >
                <LogoSquare />
                {/* <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div> */}
              </Link>
            </div>
            <div className="hidden justify-center md:flex md:w-2/3">
              <Search />
            </div>

            <div className="flex items-center justify-end gap-8 md:w-1/3">
              <Link
                className="text-accent"
                href={'https://skates-world-india.myshopify.com/account/login'}
              >
                Login
              </Link>
              <Link href={'https://skates-world-india.myshopify.com/account/register'}>
                Create account
              </Link>
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>
      <Nav menu={menu} />
    </>
  );
}
