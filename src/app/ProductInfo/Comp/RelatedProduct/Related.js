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
      <main className="flex flex-col lg:mt-[50px] justify-center items-center  ">
        <h1 className="text-start font-bold text-2xl mb-10">
          {" "}
          Related Services
        </h1>

        {flag === true ? (
          <Spinner />
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-3 gap-5 lg:gap-7">
            {FilteredproductData?.slice(0, 8)?.map((item) => {
              return (
                <>
                  <div
                    key={item._id}
                    onClick={() => Router.push(`/ProductInfo/${item._id}`)}
                    className="lg:w-[250px] w-[150px] flex flex-col gap-3 border border-gray-100 shadow-sm rounded-lg hover:shadow-lg hover:border-teal-300 cursor-pointer  p-4"
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
                        {/* <span className="  text-teal-500 lg:text-xl font-bold text-sm  leading-none flex items-center">
                          {" "}
                          {item?.price}
                        </span> */}
                      </p>
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
