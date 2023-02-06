import { PrimaryCategory } from "@/components/ui/buttons/";

const categories = ["MAN", "WOMEN", "KIDS"] as const;

const KidsPage = () => {
  return (
    <>
      kids page
      {/* {categories.map((category) => (
        <PrimaryCategory
          key={category}
          category={category}
          active={category === categories[2]}
        />
      ))} */}
    </>
  );
};

export default KidsPage;
