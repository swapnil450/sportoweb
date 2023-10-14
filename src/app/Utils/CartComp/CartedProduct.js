import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import {
  AddToCart,
  DecreseProQnt,
  RemovePro,
} from "@/app/Redux/Slice/CartSlice";
export default function CartedProduct({ DataCart }) {
  const Dispatch = useDispatch();

  const handleAddToCart = (
    prduct,
    id,
    price,
    image,
    qnt,
    selWght,
    selPrice,
    stock,
    form
  ) => {
    Dispatch(
      AddToCart({
        prduct,
        id,
        price,
        image,
        qnt,
        selWght,
        selPrice,
        stock,
        form,
      })
    );
  };
  const handleDecrimentToCart = (
    prduct,
    id,
    price,
    image,
    qnt,
    selWght,
    selPrice,
    stock,
    form
  ) => {
    Dispatch(
      DecreseProQnt({
        prduct,
        id,
        price,
        image,
        qnt,
        selWght,
        selPrice,
        stock,
        form,
      })
    );
  };
  const handleRemoveToCart = (id, selWght) => {
    Dispatch(
      RemovePro({
        id,
        selWght,
      })
    );
  };
  return (
    <>
      <div className="flex flex-col p-2 gap-5 justify-center items-center">
        {DataCart?.map((i) => {
          return (
            <>
              <div
                key={i?.selPrice}
                className="flex lg:flex-row flex-col bg-white rounded-lg border  rouded-sm p-2 lg:gap-2 gap-3 justify-center  items-center "
              >
                {/* images */}
                <div className="flex flex-row gap-5 w-full justify-center items-center">
                  <div className="flex flex-col justify-start ">
                    <Image src={i?.image} width={100} height={100} />
                  </div>
                  {/* product */}
                  <div className="flex flex-col bg-gray-20 items-start w-auto justify-start">
                    <p className="font-bold text-[14px] text-black">
                      {i?.product}
                    </p>
                    <p className="font-semibold text-gray-600 text-[14px] ">
                      ₹{Number(i?.selPrice)}
                    </p>
                  </div>
                </div>
                {/* price and offer */}

                <div className="flex lg:flex-row flex-row w-full lg:gap-1 gap-1 justify-start lg:items-start">
                  <p className="text-xs inline-flex bg-gray-50 p-1 rounded-lg text-black font-semibold">{`Total : ₹${Number(i?.selPrice) * Number(i?.qnt)
                    }`}</p>
                  <p className="text-xs inline-flex bg-gray-50 p-1 rounded-lg text-gray-600 font-semibold">{`Qnt : ${i?.selWght
                    }`}</p>
                  <p className="text-xs inline-flex bg-gray-50 p-1 rounded-lg text-gray-600 font-semibold">{`${"No : "}${i?.qnt
                    }`}</p>
                </div>
                {/* price and action */}
                <div className="flex flex-row gap-10  w-full justify-center items-center">
                  <div className="flex flex-row gap-3 justify-center items-center">
                    <Button
                      onClick={() =>
                        handleDecrimentToCart(
                          i.prduct,
                          i.id,
                          i.price,
                          i.image,
                          i.qnt,
                          i.selWght,
                          i.selPrice,
                          i.stock,
                          i.form
                        )
                      }
                      color="default"
                      size="sm"
                      variant="ghost"
                      className="text-sm font-bold w-[50px]"
                      radius={`full`}
                    >
                      -
                    </Button>
                    <p className="border cursor-pointer text-center  p-1 w-[40px] rounded-lg">
                      {i.qnt}
                    </p>
                    <Button
                      onClick={() =>
                        handleAddToCart(
                          i.prduct,
                          i.id,
                          i.price,
                          i.image,
                          i.qnt,
                          i.selWght,
                          i.selPrice,
                          i.stock,
                          i.form
                        )
                      }
                      color="default"
                      size="sm"
                      variant="ghost"
                      className="text-sm font-bold w-[50px]"
                      radius={`full`}
                    >
                      +
                    </Button>
                  </div>

                  <div>
                    <Button
                      onClick={() => handleRemoveToCart(i.id, i.selWght)}
                      color="default"
                      size="sm"
                      variant="ghost"
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              {/* end */}
            </>
          );
        })}
      </div>
    </>
  );
}
