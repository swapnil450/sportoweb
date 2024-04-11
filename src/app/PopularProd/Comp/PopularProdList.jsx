"use client";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import "rsuite/dist/rsuite-no-reset.min.css";
import { useDispatch } from "react-redux";
import {
  Button,
  Spinner,
  Card,
  CardFooter,
  CardBody,
  Skeleton,
} from "@nextui-org/react";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";
import { setLastIndex } from "../../Redux/Slice/LoadMore";
import SkeletonPro from "../../Utils/Loader/SkeletonPro";
export default function PopularProdList({ selType }) {
  const dispatch = useDispatch();
  const { proData, loading, DataLength } = DataProvideBYHook();
  const [load, setLoad] = React.useState(8);
  const Router = useRouter();
  const GetDataOnLoad = (load) => {
    dispatch(setLastIndex(load));
    setLoad(load);
  };
  const FilteredproductData =
    selType === ""
      ? proData
      : proData?.filter((i) => i.type === String(selType));
      console.log(FilteredproductData)
  return (
    <>
      {loading || !FilteredproductData ? (
        <SkeletonPro />
      ) : (
        <>
          <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 mt-[30px]   gap-3 lg:gap-5">
            {FilteredproductData?.map((item, index) => {
              return (
                <>
                  <div
                    key={index}
                    onClick={() => Router.push(`/ProductInfo/${item._id}`)}
                    className="lg:w-[250px] md:w-[200px] w-[170px] flex flex-col gap-3 border border-gray-200 shadow-sm rounded-lg hover:shadow-lg hover:border-teal-300 cursor-pointer  p-4"
                  >
                    <div className="lg:h-40 h-32 rounded-lg ">
                      <Image
                        className="w-full h-full object-cover"
                        src={item?.image[0]}
                        width={0}
                        style={{ objectFit: "contain" }}
                        height={0}
                        unoptimized
                        alt="dfvdf"
                      />
                    </div>
                    <div className="flex flex-wrap justify-start items-start ">
                      <p class=" font-semibold inline-flex flex-col gap-1 text-gray-800 lg:text-sm text-[10px]">
                        {item.product_name}
                        <span className="  text-teal-500 lg:text-xl font-bold text-sm  leading-none flex items-center">
                          {" "}
                          ₹{item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {DataLength < load ? null : (
            <Button
              onClick={() => GetDataOnLoad(load + 8, DataLength)}
              className="bg-teal-500 text-white font-bold"
            >
              Load More
            </Button>
          )}
        </>
      )}
    </>
  );
}
