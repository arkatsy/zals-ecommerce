import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  title: string;
  price: number;
  id: string;
  productImage: string;
  description: string;
  sales?: {
    discount: number; // (0% - 100%)
    discountPrice: number;
  };
}

function Product({ id, title, price, productImage, description, sales }: ProductProps) {
  return (
    <div className="relative h-full w-full max-w-xs">
      <div className="relative h-[424px] w-full cursor-pointer">
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

export default Product;
