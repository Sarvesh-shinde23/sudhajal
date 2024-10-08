
import React from "react";

const categories = [
  "Best Sellers",
  "New Releases",
  "Ultra Voilet",
  "Reverse Osmosis",
  "Filters",
];

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto text-center min-w-[240px] w-[560px] max-md:max-w-full">
      <div className="flex flex-wrap gap-8 items-center max-md:max-w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex overflow-hidden flex-col items-center self-stretch px-2 my-auto rounded"
          >
            <div className="overflow-hidden gap-2.5 self-stretch">
              {category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
