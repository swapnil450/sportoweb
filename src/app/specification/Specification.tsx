import Image from "next/image";
import React from "react";
import del from "./asset/deli.png";
import { DataSpec } from "./Data";
export default function Specification() {
  const path = [""];
  return (
    <>
      <div className="bg-white  lg:mt-10">
        <div className="text-center w-full mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="lg:text-3xl text-2xl font-extrabold text-black  sm:text-4xl">
            <span className="block">
              Want Quality Agricultural Fertilizers ?
            </span>
            <span className="block text-teal-500">
              Purchase Now With Best Price
            </span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-6 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-4 px-6  bg-teal-500 hover:bg-teal-700 focus:ring-teal-500 focus:ring-offset-teal-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap lg:gap-10 gap-8 justify-center lg:mt-[50px] lg:mb-[100px] mt-[50px] items-center">
        {DataSpec.map((itm) => (
          <div
            key={itm.name}
            className="flex flex-row gap-3 justify-center cursor-pointer w-[230px] h-[90px] border  items-center bg-gray-50 rounded-[15px]"
          >
            <Image
              className="hover:-translate-y-1"
              alt="spec"
              width={50}
              height={0}
              src={`${itm.icon}`}
            />
            <div>
              <p className="text-sm font-bold text-black">{itm.name}</p>
              <p className="text-xs font-bold text-gray-500">{itm.des}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
