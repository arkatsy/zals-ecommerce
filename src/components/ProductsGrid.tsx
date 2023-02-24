import type { Product } from "@/lib/utils";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Array<Product>;
}

function ProductsGrid({ products }: ProductGridProps) {
  return (
    <section className="products-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductsGrid;
