import ProductsGrid from "@/components/ProductsGrid";
import { generateProducts } from "@/lib/utils";

const products = generateProducts("WOMEN", 50);

const WomenPage = () => {
  return (
    <main className="mt-4">
      <ProductsGrid products={products} />
    </main>
  );
};

export default WomenPage;
