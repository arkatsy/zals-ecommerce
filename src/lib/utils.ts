export const MAIN_CATEGORIES = ["MAN", "WOMEN", "KIDS"] as const;

export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export interface Product {
  title: string;
  id: string;
  price: number;
  description: string;
  productImage: string;
  sales?: {
    discount: number;
    discountPrice: number;
  };
}

export const generateProducts = (
  category: (typeof MAIN_CATEGORIES)[number],
  length: number = 25
) => {
  return Array.from({ length }, (_, i) => {
    const isOnSales = i % 2 === 0;

    return {
      title: `${category} Product ${i + 1}`,
      id: `${category.toLowerCase()}-${i + 1}`,
      price: 100,
      description: `This is a ${category} product ${i + 1}`,
      productImage: `/${category.toLowerCase()}.jpg`,
      ...(isOnSales && {
        sales: {
          discount: 10,
          discountPrice: 90,
        },
      }),
    };
  });
};
