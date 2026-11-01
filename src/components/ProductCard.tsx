import type { Product } from "../types/product";

export const ProductCard = (props: { product: Product }) => {
  return (
    <div className="m-2 bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-200 p-4">
        <img
          className="w-full h-52 object-contain"
          src={props.product.thumbnail}
          alt={props.product.title}
        />
      </div>
      <div className="p-3">
        {props.product.brand && (
          <div className="text-[11px] font-semibold text-gray-600 uppercase">
            {props.product.brand}
          </div>
        )}

        <div className="text-base font-medium">{props.product.title}</div>

        {props.product.stock < 10 && (
          <div className="text-xs text-red-500">Low stock</div>
        )}
      </div>
      <div className="flex justify-between items-center px-3 pb-3">
        <div className="text-green-700 font-semibold">
          {"$" + props.product.price.toFixed(2)}
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span aria-hidden="true">★</span>
          <span>{props.product.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};
