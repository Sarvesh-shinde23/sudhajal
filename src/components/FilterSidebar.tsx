
import React from "react";
import PriceFilter from "./PriceFilter";
import CheckboxFilter from "./CheckboxFilter";

const modelTypes = [
  "Basic",
  "Classic",
  "Gold",
  "Prime",
  "Advanced",
  "Premium",
  "Supreme",
];
const productTypes = [
  "Reverse Osmosis(RO) Machines",
  "Ultra voilet (UV) Machines",
  "Ultra Filteration (UF) Machines",
  "Alkylizer(s)",
];
const filterTypes = [
  "Sediment Filter",
  "Granular Activated Carbon (GAC)",
  "Reverse Osmosis(RO) Membrane",
  "Carbon Block",
  "Ultra Filteration (UF)",
  "mineral filter",
  "Ultra voilet(UV) filter",
];

const FilterSidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
      <PriceFilter />
      <CheckboxFilter title="Model type" items={modelTypes} />
      <CheckboxFilter title="Product type" items={productTypes} />
      <CheckboxFilter title="Filter Types" items={filterTypes} />
    </div>
  );
};

export default FilterSidebar;
