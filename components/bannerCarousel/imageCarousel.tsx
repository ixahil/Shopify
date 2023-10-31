'use client';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

type prop = {
  images: StaticImageData[];
};

const ImageCarousel = ({ images }: prop) => {
  const [current, setCurrent] = useState(0);

  if (images.length < 1) {
    return null;
  }

  const prev = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  const next = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className={`duration-400 flex transition ease-out translate-x-[-${current * 100}%]`}>
        {images.map((image, index) => {
          return (
            <Image
              src={image}
              alt={'image' + index}
              key={'image' + index}
              layout="responsive" // Set the layout to "responsive"
              objectFit="cover"
              sizes="(min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw"
              className="h-full w-screen "
            />
          );
        })}
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full items-center justify-between px-10">
        <button onClick={prev}>
          <ArrowLeftCircleIcon
            className="h-12 w-12"
            fill="white"
            color="currentColor"
            strokeWidth={1}
          />
        </button>
        <button>
          <ArrowRightCircleIcon
            onClick={next}
            className="h-12 w-12"
            fill="white"
            color="currentColor"
            strokeWidth={1}
          />
        </button>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {images.map((image, index) => {
          return (
            <div
              onClick={() => setCurrent(index)}
              key={'circle' + index}
              className={`z-10 h-5 w-5 cursor-pointer rounded-full ${
                index === current ? 'bg-white' : 'bg-gray-500'
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
