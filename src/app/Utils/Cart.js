"use client";
import React from "react";
import Image from "next/image";

import { Badge, Button } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const Router = useRouter();
  const DataCart = useSelector((state) => {
    return state.cart;
  });

  return (
    <>
      <div
        onClick={() => Router?.push("/CartPage")}
        className="flex flex-row gap-0 justify-center cursor-pointer items-center w-[24px]"
      >
        {/* <Badge
          content={DataCart?.length}
          className="bg-yellow-400 text-xs text-white font-semibold "
          size="sm"
          shape="rectangle"
          disableOutline
        /> */}

        <Image
          loading={`lazy`}
          src="/img/cart3.png"
          alt="sgfgf"
          width={22}
          height={22}
        />
      </div>
    </>
  );
}
