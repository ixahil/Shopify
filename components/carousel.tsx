import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'featured' });
  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [
    ...products,
    ...products,
    ...products,
    ...products,
    ...products,
    ...products
  ];

  //   <ul className="slider flex gap-4">
  //   {carouselProducts.map((product, i) => (
  //     <li
  //       key={`${product.handle}${i}`}
  //       className="slider-item relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
  //     >
  //       <Link href={`/product/${product.handle}`} className="relative h-full w-full">
  //         <GridTileImage
  //           alt={product.title}
  //           label={{
  //             title: product.title,
  //             amount: product.priceRange.maxVariantPrice.amount,
  //             currencyCode: product.priceRange.maxVariantPrice.currencyCode
  //           }}
  //           src={product.featuredImage?.url}
  //           fill
  //           sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
  //         />
  //       </Link>
  //     </li>
  //   ))}
  //   {carouselProducts.map((product, i) => (
  //     <li
  //       key={`${product.handle}${i}`}
  //       className="slider-item relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
  //     >
  //       <Link href={`/product/${product.handle}`} className="relative h-full w-full">
  //         <GridTileImage
  //           alt={product.title}
  //           label={{
  //             title: product.title,
  //             amount: product.priceRange.maxVariantPrice.amount,
  //             currencyCode: product.priceRange.maxVariantPrice.currencyCode
  //           }}
  //           src={product.featuredImage?.url}
  //           fill
  //           sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
  //         />
  //       </Link>
  //     </li>
  //   ))}
  // </ul>

  return (
    <>
      <h1 className="bold w-full py-8 pt-16 text-center text-4xl font-bold">FEATURED COLLECTION</h1>
      <div className="slider-parent flex gap-4 py-16">
        <div className="slider flex w-full gap-4">
          {carouselProducts.map((product, i) => (
            <div
              key={`${product.handle}${i}`}
              className="slider-item relative  aspect-square h-[30vh] max-h-[275px] w-2/4 max-w-[475px] flex-none md:w-1/3"
            >
              <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </Link>
            </div>
          ))}
          {carouselProducts.map((product, i) => (
            <div
              key={`${product.handle}${i}`}
              className="slider-item relative  aspect-square h-[30vh] max-h-[275px] w-3/4 max-w-[475px] flex-none md:w-1/3"
            >
              <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                <GridTileImage
                  alt={product.title}
                  label={{
                    title: product.title,
                    amount: product.priceRange.maxVariantPrice.amount,
                    currencyCode: product.priceRange.maxVariantPrice.currencyCode
                  }}
                  src={product.featuredImage?.url}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// import { getCollectionProducts } from 'lib/shopify';
// import Link from 'next/link';
// import { GridTileImage } from './grid/tile';

// export async function Carousel() {
//   // Collections that start with `hidden-*` are hidden from the search page.
//   const products = await getCollectionProducts({ collection: 'featured' });

//   if (!products?.length) return null;

//   // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
//   const carouselProducts = [...products, ...products, ...products];

//   return (
//     <div className="w-full overflow-x-auto pb-6 pt-1">
//       <ul className="flex animate-carousel gap-4">
//         {carouselProducts.map((product, i) => (
//           <li
//             key={`${product.handle}${i}`}
//             className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
//           >
//             <Link href={`/product/${product.handle}`} className="relative h-full w-full">
//               <GridTileImage
//                 alt={product.title}
//                 label={{
//                   title: product.title,
//                   amount: product.priceRange.maxVariantPrice.amount,
//                   currencyCode: product.priceRange.maxVariantPrice.currencyCode
//                 }}
//                 src={product.featuredImage?.url}
//                 fill
//                 sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
//               />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
