import React from "react";

export default function AdditionalInfo({ Ingre }) {
  return (
    <>
      <div className="flex flex-wrap lg:w-3/4 gap-2 justify-center items-center p-2">
        {Ingre?.map((i) => {
          return (
            <>
              <p
                key={i}
                className="bg-gray-100 text-sm font-semibold rounded-lg p-2 "
              >
                #{i}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}
