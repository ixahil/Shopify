import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { ArrowRightCircleIcon } from 'lucide-react';
import Image from 'next/image';
import FooterBannerImage from 'public/images/footer-banner.webp';

const FooterBanner = () => {
  return (
    <>
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-16 py-32 md:grid-cols-2">
        <div className="text-3xl md:text-6xl">SOMETHING UNIQUE FOR EVERYBODY</div>
        <div className=" flex flex-col items-start gap-8">
          <div className=" text-justify">
            Whether you’re an adult or a child, Skate Supply has something for everybody. Our
            products are carefully curated keeping latest design trends, customisations, and quality
            as our prime focus. We offer fast production of all kinds of merchandise. Printed
            skateboard decks, complete boards and accessories for marketing campaigns and events can
            be requested from us at any time. You can make your own skateboard decks, completes and
            merchandise. For branded fan shops and advertising campaigns, our blank decks for
            skateboard production are made from 7 layers of individually compression-moulded
            materials.
          </div>
          <button className="rounded-full border-2 border-accent bg-accent px-7 py-3 text-text-primary shadow-xl hover:bg-transparent hover:text-black">
            Explore
          </button>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          src={FooterBannerImage}
          alt="footer-banner"
          fill
          objectFit="cover"
          sizes="100vw"
          className="object-top"
        />
      </div>
      <div className="bg-[#dcdcdc]">
        <div className="mx-auto grid w-[80%] grid-cols-1 items-center justify-center gap-16 py-32 md:grid-cols-2">
          <div className="w-1/1 relative inline-block text-3xl md:text-6xl">
            SIGN UP FOR SPECIAL OFFERS AND DISCOUNT{' '}
            <ArrowLongRightIcon className="absolute right-0 top-5 h-12 w-12" color="#e64b38" />
          </div>

          <div className="flex w-1/3 flex-row items-center gap-8 ">
            <input
              type="email"
              className="border-b-2 border-accent bg-[#dcdcdc] px-0 py-1 focus:bg-none md:px-32"
              placeholder="email@coolman.com"
            />
            <button className="ml-auto self-end rounded-full border-2 border-accent bg-accent px-4 py-2 text-text-primary shadow-xl hover:bg-transparent hover:text-black">
              <ArrowRightCircleIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
