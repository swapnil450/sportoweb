import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Order() {
  const Router = useRouter();
  return (
    <>
      <div
        onClick={() => Router.push("/Order")}
        className="flex justify-center cursor-pointer items-center w-[24px]"
      >
        <Image src="/img/order.png" alt="S" width={22} height={22} />
      </div>
    </>
  );
}
