"use client";
import React from "react";
import ImageSlide from "./Comp/ImageSlide";
import ProductDes from "./Comp/ProductDes";
import MoreInfo from "./Comp/MoreInfo";
import Related from "./Comp/RelatedProduct/Related";
import { ToastContainer, toast } from "react-toastify";
import { DataProvideBYHook } from "../DataProviderContext/DataProviderContext";
import { useParams } from "next/navigation";
import LoaderSuspense from "../Utils/Loader/LoaderSuspense";
export default function MainDetails() {
  const param = useParams();
  const { proData, loading } = DataProvideBYHook();

  const FilteredproductData = proData?.filter(
    (i) => i._id === String(param.product)
  );
  if (loading) {
    return <LoaderSuspense />;
  }

  return (
    <>
      <ToastContainer />
      {FilteredproductData?.map((i) => {
        return (
          <>
            <div
              key={i._id}
              className="flex  lg:flex-row flex-col lg:gap-10 justify-center items-center"
            >
              <div className="flex justify-center items-center">
                <ImageSlide imageArray={i?.image} />
              </div>
              <div className="flex justify-center items-center">
                <ProductDes des={i} />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <MoreInfo des={i} />
            </div>
            <div className="flex justify-center items-center">
              <Related type={i.type} />
            </div>
          </>
        );
      })}
    </>
  );
}
