import React from "react";
import DataOffer from "./Data";
export default function Offer() {
  return (
    <>
      <div>
        <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            {DataOffer?.map((i) => {
              return (
                <>
                  <div class="flex flex-col md:flex-row items-strech justify-between rounded-lg bg-gray-50  py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
                    <div class="flex flex-col justify-center md:w-1/2">
                      <h1 class="text-3xl lg:text-3xl font-semibold text-gray-800 ">
                        {i.title}
                      </h1>
                      <p class="text-base lg:text-xl text-gray-800 mt-2">
                        {i?.sub}
                        <span class="font-bold">{i.discount}</span>
                      </p>
                    </div>
                    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                      <img
                        src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
                        alt=""
                        class=""
                      />
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
