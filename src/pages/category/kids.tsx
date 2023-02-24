import ProductsGrid from "@/components/ProductsGrid";
import { generateProducts } from "@/lib/utils";

const products = generateProducts("KIDS", 50);

const KidsPage = () => {
  return (
    <main className="mt-4">
      <ProductsGrid products={products} />
    </main>
  );
};

export default KidsPage;
