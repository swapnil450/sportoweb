import React from "react";
import Description from "./MoreInfoComp/Description";
import AdditionalInfo from "./MoreInfoComp/AdditionalInfo";
import Doses from "./MoreInfoComp/Doses";
import Review from "./MoreInfoComp/Review";

export default function MoreInfo({ des }) {
  const [tab, setTab] = React.useState("Advantages");
  const options = ["Advantages", "Ingredients", "Doses", "Review"];

  return (
    <>
      <div className="flex flex-col gap-5 justify-start  w-screen lg:mx-16 mx-2 h-auto rounded-lg items-center lg:mt-[50px] ">
        <div className="flex lg:flex-row flex-wrap lg:gap-5 gap-2 lg:mt-10 mt-5 p-2 ">
          {options.map((itm) => {
            return (
              <>
                <p
                  key={itm}
                  onClick={() => setTab(itm)}
                  className={
                    itm === tab
                      ? `lg:p-3 p-2 bg-teal-500 text-white font-bold cursor-pointer lg:text-[16px] text-[14px] rounded-[20px] shadow-xl -translate-y-1`
                      : `lg:p-3 p-2 bg-gray-100 text-black font-semibold cursor-pointer lg:text-[16px] text-[14px] rounded-[20px] hover:shadow-lg hover:-translate-y-1`
                  }
                >
                  {itm}
                </p>
              </>
            );
          })}
        </div>
        <div className="flex justify-center mb-5 items-center">
          {tab === "Advantages" ? (
            <Description des={des} />
          ) : tab === "Ingredients" ? (
            <AdditionalInfo Ingre={des?.main_ingredient} />
          ) : tab === "Doses" ? (
            <Doses Doses={des?.praman} usecase={des?.usecase} />
          ) : (
            <Review Review={des?.review} />
          )}
        </div>
      </div>
    </>
  );
}
