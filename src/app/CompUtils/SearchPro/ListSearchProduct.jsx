import React from "react";
import { DataProvideBYHook } from "@/app/DataProviderContext/DataProviderContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function ListSearchProduct({ search, onClose }) {
  const { proData, flag } = DataProvideBYHook();
  const Router = useRouter();
  const getFiteredData = (search) => {
    if (search) {
      return proData?.filter((i) =>
        i?.product_name?.toLowerCase().includes(search?.toLowerCase())
      );
    }
  };

  const FilteredDataSearch = getFiteredData(search);

  const handleOnclickPro = (id) => {
    Router.push(`/ProductInfo/${id}`);
    onClose();
  };

  if (!FilteredDataSearch) {
    return (
      <>
        <p className="text-sm font-semibold text-gray-600">No Product Found</p>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col  justify-center items-center gap-2 mb-2">
        {FilteredDataSearch?.map((item) => {
          return (
            <>
              <div
                key={item?._id}
                onClick={() => handleOnclickPro(item._id)}
                className="hover:shadow-lg border p-2 cursor-pointer border-gray-300 hover:border-green-200 flex flex-row gap-2 justify-start items-center rounded-[10px]  "
              >
                <Image
                  lazyBoundary={true}
                  alt="category"
                  style={{ objectFit: "contain" }}
                  src={item?.image[0]}
                  width={50}
                  height={0}
                  className="hover:scale-105  rounded-lg"
                />
                <p className="font-bold text-sm inline-flex flex-wrap w-[150px]">
                  {item.product_name}{" "}
                </p>

                <div className="flex flex-row  justify-center items-center lg:gap-4 gap-16 ">
                  <p className="text-[#3BB77E] font-bold text-[16px] ">
                    ₹{item.price}
                    <span className="text-[10px] line-through   text-gray-400">
                      ₹{Number(item.price) + 100}
                    </span>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <p>-*-</p>
    </>
  );
}
