import { getCollectionProducts } from 'lib/shopify';

const ProductHomeFeatured = async () => {
  const products = await getCollectionProducts({ collection: 'home-banner' });
  if (!products?.length) return null;
  return products as [];
};

export default ProductHomeFeatured;
