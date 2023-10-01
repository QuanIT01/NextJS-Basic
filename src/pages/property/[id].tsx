import HeadContent from "@/components/HeadContent";
import { LayoutMain } from "@/components/layout";
import Spinner from "@/components/loading/spinner";
import PropertyDetails from "@/modules/property/PropertyDetails";
import React from "react";
// https://something.api/property/abc-land -> PropertySlugPage
const PropertyDetailPage = () => {
  return (
    <LayoutMain>
      <PropertyDetails></PropertyDetails>
    </LayoutMain>
  );
};

export default PropertyDetailPage;
