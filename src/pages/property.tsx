import { LayoutMain } from "@/components/layout";
import { API_URL } from "@/config";
import PropertyItem from "@/modules/property/PropertyItem";
import axios from "axios";
import React, { useEffect } from "react";

const PropertyPage = () => {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(null);
  console.log("PropertyPage ~ data:", data);
  useEffect(() => {
    async function fetchingProperties() {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/property`);
        if (res.status === 200) setData(res.data);
      } catch (error) {
        console.log("fetchingProperties ~ error:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchingProperties();
  }, []);
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <button className="flex items-center justify-center px-5 py-3 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal">
          + Add Property
        </button>
      </div>
      <div className="p-5 bg-white rounded-2xl">
        <div aria-label="filter"></div>
        <div
          aria-label="list"
          className="grid grid-cols-2 gap-x-16 gap-y-6 mb-9"
        >
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <PropertyItem item={item} key={index}></PropertyItem>
            ))}
        </div>
        <div
          aria-label="pagination"
          className="flex items-center justify-between"
        >
          <p className="text-gray80">Showing 1 to 10 Propertys</p>
          <div className="flex items-center gap-[10px]">
            <button className="flex items-center justify-center text-white rounded-lg w-9 h-9 bg-primary">
              1
            </button>
            <button className="flex items-center justify-center rounded-lg w-9 text-gray80 h-9">
              2
            </button>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
};

export default PropertyPage;
