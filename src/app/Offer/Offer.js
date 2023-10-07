import React from "react";
import DataOffer from "./Data";
import Image from "next/image";

export default function Offer() {
  return (
    <>
      <div>
        <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            {DataOffer?.map((i) => {
              return (
                <>
                  <div class="flex flex-col gap-3  items-strech justify-between rounded-lg border hover:bg-gray-50 cursor-pointer rouned-lg py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div class="flex flex-row justify-center gap-2">
                      <h1 class="text-2xl lg:text-2xl font-semibold text-teal-500 ">
                        {i.title}
                      </h1>
                      <p class="text-base lg:text-sm inline-flex flex-row gap-1 text-gray-500 mt-2">
                        {i?.sub}
                        <span class="font-bold">{i.discount}</span>
                      </p>
                    </div>
                    <div class="w-auto mt-8 md:mt-0 flex justify-center md:justify-end">
                      <Image unoptimized src={`${i?.imageURL}`} width={0} className="w-full" height={0} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
