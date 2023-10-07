import React from "react";
import ReactPlayer from "react-player";
export default function Review({ Review }) {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h1 className="lg:text-xl text-sm font-extrabold ">
          ⭐⭐ Product Review ⭐⭐
        </h1>

        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-6xl mb-10 gap-10">
          {Review?.map((itm, index) => {
            return (
              <>
                <div key={index}>
                  <ReactPlayer
                    className="lg:block hidden"
                    width="500px"
                    url={itm}
                  />
                  <ReactPlayer
                    className="block lg:hidden"
                    width="350px"
                    height="200px"
                    url={itm}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
