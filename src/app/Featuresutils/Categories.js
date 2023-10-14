import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Categoriespro() {
  const img = [
    { src: "/img/brands/soil.png", name: "Soil Health" },
    { src: "/img/plant.png", name: "Plant Growth" },
    { src: "/img/insectiside.png", name: "Insectiside" },
    { src: "/img/pestiside.png", name: "Herbi/Fungi/side" },
    { src: "/img/ferti.png", name: "Organic Fertilizers" },
    { src: "/img/cow.png", name: "Cow Feeds" },
  ];

  return (
    <>
      <div className="flex justify-center mt-[20px] items-center p-5">
        <div className="flex gap-16 flex-wrap justify-center items-center">
          {img.map((i) => {
            return (
              <>
                <Link href="#prod">
                  <div
                    key={i.src}
                    className="flex flex-col gap-2 justify-center items-center"
                  >
                    <div className="rounded-full border cursor-pointer border-gray-400 hover: p-4 relative">
                      <Image src={i.src} alt="S" width={50} height={50} />
                    </div>
                    <p className="flex text-xs text-gray-600 font-semibold items-center justify-center text-center">
                      {i.name}
                    </p>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
