"use client";
import React from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import "rsuite/dist/rsuite-no-reset.min.css";

import { Button, Spinner } from "@nextui-org/react";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";
export default function PopularProdList({ selType }) {
  const { proData, loading } = DataProvideBYHook();
  const [load, setLoad] = React.useState(10);
  const Router = useRouter();

  const FilteredproductData =
    selType === ""
      ? proData
      : proData?.filter((i) => i.type === String(selType));

  return (
    <>
      {loading || !FilteredproductData ? (
        <Spinner />
      ) : (
        <>
          <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 mt-[20px]  p- gap-4 lg:gap-10">
            {FilteredproductData.slice(0, load)?.map((item) => {
              return (
                <>
                  <div
                    key={item?._id}
                    onClick={() => Router.push(`/ProductInfo/${item._id}`)}
                    class="flex-shrink-0 m-2 cursor-pointer relative border  overflow-hidden  rounded-lg max-w-sm shadow-sm hover:shadow-lg"
                  >
                    <div class="relative pt-10 px-10 flex items-center justify-center">
                      <div
                        class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                        // style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"
                      ></div>
                      <Image
                        class="relative w-40"
                        src={item?.image[0]}
                        unoptimized
                        width={0}
                        height={0}
                        alt="dfvdf"
                      />
                    </div>
                    <div class="relative text-white px-6 pb-6 mt-6">
                      <span class="block text-gray-500 opacity-75 -mb-1">
                        {item.type}
                      </span>
                      <div class="flex justify-between">
                        <span class="block font-semibold text-gray-800 text-xl">
                          {item.product_name}
                        </span>
                        <span class=" bg-gray-50 rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                          ₹{item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {proData?.length < load ? null : (
            <Button
              onClick={() => setLoad(load + 10)}
              className="bg-[#3BB77E] text-white font-bold"
            >
              Load More
            </Button>
          )}
        </>
      )}
    </>
  );
}
