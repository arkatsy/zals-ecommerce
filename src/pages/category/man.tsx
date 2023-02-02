import { PrimaryCategory } from "@/components/ui/buttons/menu";

const categories = ["MAN", "WOMEN", "KIDS"] as const;

const ManPage = () => {
  return (
    <>
      {categories.map((category) => (
        <PrimaryCategory
          key={category}
          category={category}
          active={category === categories[0]}
        />
      ))}
    </>
  );
};

export default ManPage;
