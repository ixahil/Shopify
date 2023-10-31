'use client';

import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { useSearchParams } from 'next/navigation';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const searchParams = useSearchParams();

  let selectedOption;

  product.options.map((option) => {
    selectedOption = searchParams.get(option.name.toLowerCase());
  });

  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-5xl font-medium">
          {product.title}

          {selectedOption ? '  -  ' : <></>}
          {selectedOption}
        </h1>
        <div className="mr-auto w-auto rounded-full bg-accent p-2 text-sm text-white">
          <Price
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
          />
        </div>
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h2 className="border-b py-16 pb-6 text-4xl dark:border-neutral-700">Description</h2>
        {product.descriptionHtml ? (
          <Prose
            className="mb-6 text-sm leading-tight dark:text-white/[60%]"
            html={product.descriptionHtml}
          />
        ) : null}
      </div>
    </>
  );
}
