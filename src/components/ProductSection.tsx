import type { Product } from "../types/product";
import { ProductGrid } from "./ProductGrid";

type ProductSectionPros = {
  title: string;
  products: Product[];
};

export const ProductSection = ({ title, products }: ProductSectionPros) => {
  return (
    <>
      <h1 className="p-2 text-2xl font-bold">{title}</h1>
      <ProductGrid products={products} />
    </>
  );
};
