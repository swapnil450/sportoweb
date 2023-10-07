import Image from "next/image";
import React from "react";

export default function ImageSlide({ imageArray }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSelectIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center lg:gap-4 gap-16">
        <div className="flex justify-center w-[350px] lg:w-[400px]  rounded-lg items-center">
          <Image
            alt="image pro"
            loading={`lazy`}
            src={imageArray[currentIndex]}
            width={300}
            className="relative"
            height={0}
          />
          {/* <img
            class="relative"
            src="https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png"
            alt=""
          /> */}
        </div>

        <div className="flex flex-row h-[80px] justify-center items-center gap-3">
          {imageArray?.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  currentIndex === index
                    ? `border-1  p-1 shadow-xl rounded-lg border-[#00DDB8]  `
                    : `border-1 p-1 hover:shadow-xl rounded-lg  hover:scale-105`
                }
              >
                <Image
                  onClick={() => handleSelectIndex(index)}
                  key={index}
                  alt="image pro"
                  className="cursor-pointer"
                  src={item}
                  width={40}
                  height={40}
                  loading={`lazy`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
