import Link from 'next/link';

import FooterMenu from 'components/layout/footer-menu';
import LogoSquare from 'components/logo-square';
import { getMenu } from 'lib/shopify';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Suspense } from 'react';

const { COMPANY_NAME, SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700';
  const menu = await getMenu('footer-menu');
  const usefulLinks = await getMenu('useful-links');

  const copyrightName = COMPANY_NAME || SITE_NAME || '';
  return (
    <footer className="bg-[#333333] text-sm text-text-primary dark:text-neutral-400">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 border-t border-neutral-200 px-6 py-10 text-sm dark:border-neutral-700 md:flex-row md:justify-between md:px-4 min-[1320px]:px-0">
        <div className="w-1/4">
          <Link
            className="flex flex-col items-center justify-between gap-2 text-text-primary dark:text-white md:pt-1"
            href="/"
          >
            <LogoSquare size="sm" />
            <span className="uppercase">{SITE_NAME}</span>
            <p className="text-justify">
              Skate Supply is a wholesale skateboard distributor in India. Housing some of the best
              brands from all across the globe, our skateboards are selected on the basis of high
              quality materials for the deck and wheels along with no compromise on aesthetics.
              Furthermore we have a wide range of skateboard accessories and spare parts in our
              collection along with other small parts like single nuts, spacers and more.
            </p>
          </Link>
        </div>
        <div className="flex w-1/3 justify-between">
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} title={'Skates World'} />
          </Suspense>
          <Suspense
            fallback={
              <div className="flex h-[188px] w-[200px] flex-col gap-2">
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={usefulLinks} title={'Useful Links'} />
          </Suspense>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Social</h2>
          <div className="flex gap-4">
            <Link href={'#'} className="rounded-full bg-gray-200 p-2 hover:bg-accent">
              <Facebook fill="black" size={32} />
            </Link>
            <Link href={'#'} className="rounded-full bg-gray-200 p-2 hover:bg-accent">
              <Instagram fill="black" size={32} />
            </Link>
            <Link href={'#'} className="rounded-full bg-gray-200 p-2 hover:bg-accent">
              <Twitter fill="black" size={32} />
            </Link>
          </div>

          {/* <a
            className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
            aria-label="Deploy on Vercel"
            href="https://vercel.com/templates/next.js/nextjs-commerce"
          >
            <span className="px-3">▲</span>
            <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
            <span className="px-3">Deploy</span>
          </a> */}
        </div>
      </div>
      <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
          <p>
            &copy; {copyrightDate} {copyrightName}
            {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
          </p>
          <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
          <p>Designed in California</p>
          <p className="md:ml-auto">no compromise on aesthetics</p>
        </div>
      </div>
    </footer>
  );
}
