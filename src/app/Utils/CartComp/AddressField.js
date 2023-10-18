"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import DOMPurify from "dompurify";

export default function App({ formValue, setFormValue, handleAdrsForm }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const stateoption = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const handleSubmit = (formValue) => {
    if (
      !formValue?.state && state.length <= 20 ||
      !formValue?.city && city.length <= 20 ||
      !formValue?.referenceMobileNumber && referenceMobileNumber.length <= 12 ||
      !formValue?.deliveryAddress && deliveryAddress.length <= 50
    ) {
      toast.error("Address is Not Valide", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "light",
        style: {
          borderRadius: 10,
          font: "bold",
          fontSize: 15,
        },
      });
      alert("");
      return;
    } else {
      localStorage.setItem("address", JSON.stringify(formValue));
      onClose();
    }
  };

  return (
    <>
      <Button
        color="default"
        onPress={onOpen}
        variant="ghost"
        className="text-sm  font-bold "
      >
        {" "}
        +Add Address
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Fill Address
              </ModalHeader>
              <ModalBody>
                <p className="text-sm">Select State</p>
                <select
                  onChange={handleAdrsForm}
                  className="w-full p-3 border cursor-pointer border-gray-300 rounded-xl"
                  name="state"
                  value={formValue?.state}
                >
                  <option>Select State</option>
                  {stateoption?.map((i) => {
                    return (
                      <>
                        <option key={i}>{i}</option>
                      </>
                    );
                  })}
                </select>
                <Input
                  label="City"
                  name="city"
                  placeholder="Enter your city"
                  type="text"
                  maxLength={20}
                  value={formValue?.city}
                  onChange={handleAdrsForm}
                  variant="bordered"
                />
                <Input
                  label="Pincode No"
                  name="pincode"
                  placeholder="Enter your Pincode"
                  maxLength={6}
                  type="number"
                  value={formValue?.pincode}
                  onChange={handleAdrsForm}
                  variant="bordered"
                />
                <Input
                  label="Mobile No"
                  name="referenceMobileNumber"
                  placeholder="Enter your Mobile No"
                  maxLength={12}
                  type="number"
                  value={formValue?.referenceMobileNumber}
                  onChange={handleAdrsForm}
                  variant="bordered"
                />
                <Input
                  label="Delivery Address"
                  name="deliveryAddress"
                  maxLength={50}
                  placeholder="Enter your Delivery Address"
                  type="textarea"
                  colspan="3"
                  value={formValue?.deliveryAddress}
                  onChange={handleAdrsForm}
                  variant="bordered"
                />
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                {!formValue?.state ||
                  !formValue?.city ||
                  !formValue?.referenceMobileNumber ||
                  !formValue?.deliveryAddress ? (
                  <p></p>
                ) : (
                  <Button
                    onClick={() => handleSubmit(formValue)}
                    className="text-white font-semibold bg-teal-500"
                    onPress={onClose}
                  >
                    Save
                  </Button>
                )}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
