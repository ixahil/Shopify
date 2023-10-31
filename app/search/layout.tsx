import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto flex flex-col gap-32 border-t-2 p-32 pb-4 text-black dark:text-white md:flex-row">
        <div className="order-first flex w-full flex-none flex-col gap-16 md:max-w-[125px]">
          <FilterList list={sorting} title="Sort by" />
          <Collections />
        </div>

        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        {/* <div className="order-none flex-none md:order-last md:w-[125px]"></div> */}
      </div>
    </Suspense>
  );
}
