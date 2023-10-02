import Link from "next/link";
import PropertyItem from "@/modules/property/PropertyItem";
import React from "react";
import { getProperties } from "@/store/property.service";
import { LayoutMain } from "@/components/layout";
import { PropertyItemData } from "@/types/property.types";
import { useQuery } from "@tanstack/react-query";
import PropertyList from "@/modules/property/PropertyList";

const PropertyPage = () => {
  return (
    <LayoutMain>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-bold text-[25px] text-primaryText">
          Property List
        </h1>
        <Link
          href="/property/create"
          className="flex items-center justify-center px-5 py-3 text-white bg-primary text-sm font-medium rounded-[10px] leading-normal"
        >
          + Add Property
        </Link>
      </div>
      <PropertyList></PropertyList>
    </LayoutMain>
  );
};

export default PropertyPage;
