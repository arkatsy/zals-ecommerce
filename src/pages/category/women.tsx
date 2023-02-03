import { PrimaryCategory } from "@/components/ui/buttons/menu";

const categories = ["MAN", "WOMEN", "KIDS"] as const;

const WomenPage = () => {
  return (
    <>
      women page
      {/* {categories.map((category) => (
        <PrimaryCategory
          key={category}
          category={category}
          active={category === categories[1]}
        />
      ))} */}
    </>
  );
};

export default WomenPage;
