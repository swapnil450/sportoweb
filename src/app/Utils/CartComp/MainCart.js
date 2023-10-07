"use Client";
import React from "react";
export default function MainCart({ formValue }) {
  return (
    <>
      <h3 className="text-lg text-center font-bold">My Cart!</h3>

      <div className="flex justify-center p-2 m-5 items-center">
        <div className="p-2 bg-green-50 flex flex-row gap-4 rounded-lg mb-2">
          <div>
            <p className="text-sm text-center flex flex-row justify-center items-center gap-3 m-1 font-bold text-green-700">
              {" "}
              📍 Delivery Address{" "}
              <span
                // onClick={handleOpen}
                className="bg-white text-green-500 cursor-pointer p-1 text-xs rounded-lg"
              >
                📝 edit
              </span>
            </p>{" "}
            <div className="flex flex-col">
              <span className="">
                <span className="text-gray-900 p-1 text-sm">State : </span>
                <span className="p-1 text-xs  text-gray-800">
                  {formValue.state}
                </span>
              </span>
              <span className=" ">
                <span className="text-gray-900 p-1 text-sm">City : </span>
                <span className="p-1 text-xs  text-gray-800">
                  {formValue.city}
                </span>
              </span>
              <span className=" ">
                <span className="text-gray-900 p-1 text-sm">Pin Code : </span>
                <span className="p-1 text-xs  text-gray-800">
                  {formValue.pincode}
                </span>
              </span>
              <span className=" ">
                <span className="text-gray-900 p-1 text-sm">
                  Reference Mo.No :
                </span>
                <span className="p-1 text-xs  text-gray-800">
                  {formValue.referenceMobileNumber}
                </span>
              </span>
              <span className="">
                <span className="text-gray-900 p-1 text-sm">
                  Delivery Address :{" "}
                </span>
                <span className="p-1 text-xs  text-gray-800">
                  {formValue.deliveryAddress}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
