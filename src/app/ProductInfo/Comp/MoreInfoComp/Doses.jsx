import React from "react";

export default function Doses({ Doses, usecase }) {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-3 justify-start items-start p-2">
        <p>🩺 {Doses}</p>
        <div className="flex flex-row flex-wrap justify-center items-center gap-3">
          <p>UseCases : </p>
          {usecase?.map((i) => {
            return (
              <>
                <p key={i} className="bg-green-100 rounded-lg text-black font-semibold text-sm p-2">
                  {" "}
                  {i}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
