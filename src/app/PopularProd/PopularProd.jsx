"use client";
import React from "react";
import PopularProdList from "./Comp/PopularProdList";
import { useDispatch } from "react-redux";
import { ProTypeRed } from "../Redux/Slice/ProductTypeSlice";
import { setLastIndex } from "../Redux/Slice/LoadMore";
export default function PopularProd() {
  const dispatch = useDispatch();

  const img = [
    { name: "All", value: "" },
    { value: "Hostels", name: "Hostels" },
    { value: "Rooms", name: "Rooms" },
    { value: "Stationary", name: "Stationary" },
    { value: "Libraries", name: "Libraries" },
    { value: "Mess", name: "Mess" },
  ];
  const location = [
    { value: "Pune", name: "Pune" },
    { value: "Hydrabad", name: "Hydrabad" },
    { value: "Mumbai", name: "Mumbai" },
    { value: "Banglore", name: "Banglore" },
    // { value: "Gujrat", name: "Gujrat" },
  ];

  const [selType, setSelType] = React.useState("");
  const [selTypel, setSelTypel] = React.useState("");
  const SelectType = (selType) => {
    dispatch(ProTypeRed(selType));
    dispatch(setLastIndex(8));
    setSelType(selType);
  };

  return (
    <>
      <main className="flex lg:flex-col flex-col bg-white justify-center  items-center  gap-7  ">
       
        <div
          id="prod"
          className="flex lg:flex-row flex-col gap-[15px]  justify-center items-center "
        >
          <div className="flex mt-3 flex lg:flex-row flex-wrap gap-4  justify-center items-center">
            {img?.map((i) => {
              return (
                <>
                  <p
                    key={i}
                    onClick={() => SelectType(i.value)}
                    className={
                      selType === i.value
                        ? `font-semibold text-xs lg:text-sm  bg-sky-500 rounded-lg p-2 text-white  hover:-translate-y-1 cursor-pointer`
                        : `font-semibold text-xs bg-gray-50 rounded-lg p-2 text-gray-800  hover:-translate-y-1 cursor-pointer`
                    }
                  >
                    {i.name}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="flex mt-3 flex lg:flex-row flex-wrap gap-4  justify-center items-center">
          {location?.map((i) => {
            return (
              <>
                <p
                  key={i}
                  onClick={() => setSelTypel(i.value)}
                  className={
                    selTypel === i.value
                      ? `font-semibold text-xs lg:text-sm  bg-sky-500 rounded-lg p-2 text-white  hover:-translate-y-1 cursor-pointer`
                      : `font-semibold text-xs bg-gray-50 rounded-lg p-2 text-gray-800  hover:-translate-y-1 cursor-pointer`
                  }
                >
                  {i.name}
                </p>
              </>
            );
          })}
        </div>
        <PopularProdList selType={selType} selTypel={selTypel} />
      </main>
    </>
  );
}
