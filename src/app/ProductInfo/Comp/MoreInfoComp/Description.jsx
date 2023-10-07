import React from "react";

export default function Description({ des }) {
  return (
    <>
      <div className="flex flex-wrap  flex-col gap-3 justify-center items-center">
        <div className="flex flex-col gap-2 justify-start items-start p-2">
          {des.Advantages?.map((i, index) => {
            return (
              <>
                <p key={i} className="bg-gray-100 p-1 text-sm  rounded-lg">
                  👉 {i}{" "}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
