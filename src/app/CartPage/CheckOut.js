import React from "react";
import axios from "axios";
import { RadioGroup, Radio, cn } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import OnScreenLoader from "../Utils/Loader/OnScreenLoader";
import "react-toastify/dist/ReactToastify.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { DataProvideBYHook } from "../DataProviderContext/DataProviderContext";
import SignIn from "../Auth/SignIn";
import OrderPlaced from "./hooks/OrderPlaceHook";
import SuccessOrder from "./Comp/SuccessOrder";
export const CustomRadio = (props) => {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
          "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
          "data-[selected=true]:border-[#00DDB8]"
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export default function CheckOut({
  HandlePlaceOrder,
  orderfinal,
  DataCart,
  total,
}) {
  const Router = useRouter();
  const { user } = DataProvideBYHook();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selected, setSelected] = React.useState("CASH");

  const [orderLoad, setOrderLoad] = React.useState(false);
  const [status, setStatus] = React.useState(false);

  return (
    <>
      <OnScreenLoader status={orderLoad} />
      <SuccessOrder status={status} setStatus={setStatus} />
      {user?.name ? (
        <Button
          onClick={() => HandlePlaceOrder(onOpen)}
          size="lg"
          className="bg-teal-500 w-full font-bold text-white"
        >
          PLACE ORDER
        </Button>
      ) : (
        <>
          <div className="flex flex-row justify-center items-center gap-3">
            <p className="text-sm bg-gray-50 p-2 rounded-lg font-semibold text-black">
              😎 You are not Login 😎
            </p>

          </div>
        </>
      )}

      <Modal
        scrollBehavior={`inside`}
        size={`5xl`}
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex lg:flex-row flex-col  p-2 justify-center items-center  gap-5">
                  {/* <div className="flex  bg-white rounded-lg  shadow-sm h-[300px] lg:w-3/6 w-[310px] flex-col gap-3 justify-center p-3 items-center">
                    <p className="text-start font-normal text-black text-[16px]">
                      Total
                    </p>
                    <Divider className="" />
                    <div className="flex flex-col w-[300px] justify-center items-center gap-4">
                      <div className="flex justify-start items-start flex-row lg:gap-40 gap-16">
                        <p className=" inline-flex flex-row  justify-start font-normal text-black text-[16px]">
                          Price({DataCart?.length || 0} item)
                        </p>
                        <span>₹{total}</span>
                      </div>
                      <div className="flex justify-start items-start flex-row lg:gap-40 gap-16">
                        <p className=" inline-flex flex-row justify-start font-normal text-black text-[16px]">
                          Discount(10%)
                        </p>
                        <span className="text-teal-500">-10%</span>
                      </div>
                      <div className="flex justify-start items-start flex-row lg:gap-40 gap-16">
                        <p className=" inline-flex  justify-start flex-row font-normal text-black text-[16px]">
                          Delivery Charges
                        </p>
                        <span>FREE</span>
                      </div>
                    </div>
                    <Divider className="" />
                    <div className="flex justify-center items-center flex-row lg:gap-36 gap-16">
                      <p className=" inline-flex  justify-start flex-row gap-40  text-black font-bold lg:text-lg">
                        Total Amount
                      </p>
                      <span className="text-black font-bold text-lg">
                        ₹{total || 0}
                      </span>
                    </div>
                    <Divider className="my-1" />
                  </div> */}
                  <div id="summary" class="lg:w-3/6 w-full ">
                    <div class="flex justify-between mt-10 mb-5">
                      <span class="font-semibold text-sm uppercase">Items</span>
                      <span class="font-semibold text-sm">
                        {DataCart?.length || 0}{" "}
                      </span>
                    </div>
                    <div>
                      <label class="font-medium inline-block mb-3 text-sm uppercase">
                        Shipping
                      </label>
                      <select class="block p-2 text-gray-600 w-full text-sm">
                        <option>Standard shipping {String(process.env.SHIPPING)}</option>
                      </select>
                    </div>
                    {/* <div class="py-10">
                      <label
                        for="promo"
                        class="font-semibold inline-block mb-3 text-sm uppercase"
                      >
                        Promo Code
                      </label>
                      <input
                        type="text"
                        id="promo"
                        placeholder="Enter your code"
                        class="p-2 text-sm w-full"
                      />
                    </div> */}
                    {/* <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                      Apply
                    </button> */}
                    <div class="border-t mt-8">
                      <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>₹{total}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto">
                    <RadioGroup
                      label="Payment Mode"
                      value={selected}
                      onValueChange={setSelected}
                    >
                      <CustomRadio
                        description="100% Free Delivery"
                        value="CASH"
                      >
                        Cash On Delivery
                      </CustomRadio>
                      <CustomRadio
                        isDisabled={true}
                        description="Pay Secure Pay Digitaly"
                        value="UPI"
                      >
                        UPI
                      </CustomRadio>
                      <CustomRadio
                        isDisabled={true}
                        description="Card/Net Banking"
                        value="CARD"
                      >
                        Card/Net Banking
                      </CustomRadio>
                    </RadioGroup>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter className="mt-5">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="#00DDB8"
                  className="bg-teal-500 text-white font-bold"
                  onPress={() =>
                    OrderPlaced(orderfinal, setOrderLoad, setStatus, onClose)
                  }
                >
                  Confirm Order
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
