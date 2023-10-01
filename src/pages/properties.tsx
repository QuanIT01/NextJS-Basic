// import { LayoutMain } from "@/components/layout";
// import { API_URL } from "@/config";
// import PropertyItem from "@/modules/property/PropertyItem";
// import axios from "axios";
// import React, { useEffect } from "react";

// const PropertyPage = () => {
//   const [data, setData] = React.useState<any[]>([]);
//   useEffect(() => {
//     async function fetchingProperties() {
//       try {
//         const res = await axios.get(`${API_URL}/properties`);
//         if (res.status === 200) setData(res.data);
//       } catch (error) {
//         console.log("fetchingProperties ~ error:", error);
//       }
//     }
//     fetchingProperties();
//   }, []);
//   return (
//     <LayoutMain>
//       <div className="flex items-center justify-between mb-5">
//         <h1 className="font-bold text-[25px] text-primaryText">
//           Property List
//         </h1>
//         <button className="flex items-center justify-center rounded-[10px] px-5 py-3 text-white bg-primary leading-normal">
//           + Add Property
//         </button>
//       </div>
//       <div className="p-5 bg-white rounded-2xl">
//         <div aria-label="filter"></div>
//         <div
//           aria-label="list"
//           className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
//         >
//           {data &&
//             data.length > 0 &&
//             data.map((item, index) => (
//               <PropertyItem key={index}></PropertyItem>
//             ))}
//         </div>
//         <div
//           aria-label="pagination"
//           className="flex items-center justify-between"
//         >
//           <p className="text-gray80">Showing 1 to 10 Propertys</p>
//           <div className="flex items-center gap-[10px]">
//             <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
//               1
//             </button>
//           </div>
//         </div>
//       </div>
//     </LayoutMain>
//   );
// };

// export default PropertyPage;
