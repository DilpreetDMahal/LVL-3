import type { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

export const ProductGrid = (props: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {props.products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
