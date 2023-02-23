import Product from "./Product";

function ProductsGrid() {
  return (
    <section
      className="grid grid-cols-1 place-items-center gap-y-16 gap-x-6 sm:grid-cols-2
    md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

export default ProductsGrid;

// Testing Data
const products = Array.from({ length: 50 }, (_, i) => {
  const isOnSales = i % 2 === 0;
  if (isOnSales) {
    return {
      title: `Product title ${i}`,
      id: `p-000${i}`,
      price: 64,
      description: "Description",
      productImage: "/testingImage.jpg",
      sales: {
        discount: 10,
        discountPrice: 57.6,
      },
    };
  }

  return {
    title: `Product title ${i}`,
    id: `p-000${i}`,
    price: 64,
    description: "Description",
    productImage: "/testingImage.jpg",
  };
});
