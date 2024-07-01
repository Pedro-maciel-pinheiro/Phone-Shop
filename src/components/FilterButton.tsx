// "use client";

// import React, { useState } from "react";

// interface FilterButtonProps {
//   onFilter: (brand: string | null) => void;
// }

// const FilterButton:React.FC<FilterButtonProps> = ({onFilter}) => {
//   const [selectedBrand , setSelectedBrand] = useState("")

//   const handleFilter = (brand:string) =>{
//     setSelectedBrand(brand)
//   }
  

  

//   return (
//     <div className="flex gap-4 my-4">
//       <button
//         className={`py-2 px-4 ${
//           selectedBrand === "Samsung" ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//         onClick={() => handleFilter("Samsung")}
//       >
//         Samsung
//       </button>
//       <button
//         className={`py-2 px-4 ${
//           selectedBrand === "Apple" ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//         onClick={() => handleFilter("Apple")}
//       >
//         Apple
//       </button>
//       <button
//         className={`py-2 px-4 ${
//           selectedBrand === "All" ? "bg-blue-500 text-white" : "bg-gray-200"
//         }`}
//         onClick={() => handleFilter("All")}
//       >
//         All
//       </button>
//     </div>
//   );
// };

// export default FilterButton;
