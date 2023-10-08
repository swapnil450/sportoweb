import React from "react";
import Image from "next/image";

import { Spinner } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";
export default function Related({ type }) {
  const { proData, flag } = DataProvideBYHook();
  const Router = useRouter();
  const FilteredproductData = proData?.filter((i) => i?.type === String(type));
  return (
    <>
      <main className="flex flex-col lg:mt-[50px] justify-center items-center lg:mx-10 mx-2">
        <h1 className="text-start font-bold text-2xl mb-5">
          {" "}
          Related Products
        </h1>

        {flag === true ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2  gap-2">
            {FilteredproductData?.slice(0, 8)?.map((item) => {
              return (
                <>
                  <div
                    key={item?._id}
                    onClick={() => Router.push(`/ProductInfo/${item._id}`)}
                    class="flex-shrink-0 flex flex-col justify-center items-center cursor-pointer relative border  overflow-hidden bg-gray-0 rounded-lg max-w-sm shadow-sm hover:shadow-lg"
                  >
                    <div class="relative p-3 flex items-center justify-center">

                      <Image
                        className="relative w-32"
                        src={item?.image[0]}
                        width={40}
                        height={0}
                        unoptimized
                        alt="zcvcv"
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
        )}
      </main>
    </>
  );
}
