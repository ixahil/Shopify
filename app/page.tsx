import { BannerCarousel } from 'components/bannerCarousel';
import { Carousel } from 'components/carousel';
import FooterBanner from 'components/footer/footerBanner';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import FeaturedBanner from 'public/images/banner-featured.png';
import PlaceHolder from 'public/images/placeHolder.jpg';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  const products = await getCollectionProducts({ collection: 'home-banner' });

  return (
    <>
      <Suspense>
        <BannerCarousel />
        <Carousel />
        <div className="grid h-full grid-cols-2 grid-rows-2 gap-0">
          <div
            id="item-0"
            className="relative col-start-2 col-end-3 row-start-1 row-end-3 bg-[#ebebeb] pt-32"
          >
            {/* <div className="rotate-[-5deg] text-center">
              <h1 className="w-full bg-white p-4 text-8xl font-extrabold italic text-accent">
                FIRST
              </h1>
            </div>
            <div className="rotate-[-5deg] pb-16 text-center">
              <h1 className="p-2 text-8xl font-extrabold italic text-black">OF ITS KIND</h1>
            </div>
            <br></br>
            <h3 className="p-2 text-center text-2xl font-extrabold italic text-accent">
              GLOBAL BRANDS OFFICIALLY SELL IN INDIA
            </h3> */}

            <Image
              src={FeaturedBanner}
              fill
              alt="product-banner"
              className="h-1/2 object-contain md:h-full md:w-full md:object-contain"
            />
          </div>
          <div id="item-1" className="relative col-start-1 col-end-2 row-start-1 row-end-2 py-4">
            <div className=" flex flex-col items-center">
              {products?.length ? (
                <Link
                  href={`/product/${products[0]?.handle}`}
                  className="group relative flex flex-col items-center"
                >
                  <Image
                    src={products[0]?.featuredImage.url || PlaceHolder}
                    objectFit="cover"
                    alt="product-banner"
                    width={100}
                    height={100}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="h-1/4 w-1/4 transform transition-transform group-hover:scale-125 md:h-auto md:w-1/4"
                  />
                  <div
                    className={'flex w-full flex-col items-center justify-center gap-4 px-4 py-4'}
                  >
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 text-2xl leading-none tracking-tight">
                        {products[0]?.title}
                      </h3>
                    </div>
                    <div className="text-xl">
                      {products[0]?.priceRange.maxVariantPrice.amount}
                      {'  '}
                      {products[0]?.priceRange.maxVariantPrice.currencyCode}
                    </div>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div id="item-2" className="col-start-1 col-end-2 row-start-2 row-end-3 py-4">
            <div className=" flex flex-col items-center">
              {products?.length ? (
                <Link
                  href={`/product/${products[0]?.handle}`}
                  className=" group relative flex flex-col items-center"
                >
                  <Image
                    src={products[1]?.featuredImage.url || PlaceHolder}
                    objectFit="cover"
                    alt="product-banner"
                    width={100}
                    height={100}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="h-1/4 w-1/4 transform transition-transform group-hover:scale-125 md:h-auto md:w-1/4"
                  />
                  <div
                    className={'flex w-full flex-col items-center justify-center gap-4 px-4 py-4'}
                  >
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 text-2xl leading-none tracking-tight">
                        {products[1]?.title}
                      </h3>
                    </div>
                    <div className="text-xl">
                      {products[1]?.priceRange.maxVariantPrice.amount}
                      {'  '}
                      {products[1]?.priceRange.maxVariantPrice.currencyCode}
                    </div>
                  </div>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <FooterBanner />
      </Suspense>
    </>
  );
}
