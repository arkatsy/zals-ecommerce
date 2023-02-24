import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/utils";

function ProductCard({ id, title, price, productImage, description, sales }: Product) {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="relative h-[400px] w-full cursor-pointer">
        <Link href="/product/[id]" as={`/product/${id}`}>
          <Image
            src={productImage}
            className="object-cover object-top"
            fill
            alt={description}
          />
        </Link>
      </div>
      <div className="mt-1 flex w-full justify-between text-lg font-light uppercase tracking-wide">
        <Link className="hover:underline" href="/product/[id]" as={`/product/${id}`}>
          {title}
        </Link>
        <p className={sales && "line-through"}>{price} EUR</p>
      </div>
      {sales && (
        <div className="absolute right-0 text-lg font-light uppercase tracking-wide">
          <p className="flex gap-4 bg-yellow-300 px-1 font-normal">
            <span>{sales.discount}%</span>
            <span>{sales.discountPrice} EUR</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
