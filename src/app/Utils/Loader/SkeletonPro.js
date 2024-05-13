import React from "react";
import { Card, Skeleton, Spinner } from "@nextui-org/react";

export default function SkeletonPro() {

  return (
    <>
      <div className="flex w-[500px] h-full justify-center items-center">
        <Spinner style={{ width: 100, height: 100 }} />
      </div>
    </>
  );
}
