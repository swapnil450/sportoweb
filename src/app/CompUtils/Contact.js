import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ContactUs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("2xl");

  const sizes = ["2xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      {sizes.map((size) => (
        <Button
          key={size}
          className="bg-trasparent text-white"
          size="sm"
          onPress={() => handleOpen(size)}
        >
          Contact Now
        </Button>
      ))}

      <Modal
        size={size}
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us !
              </ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col justify-center items-center m-5"
                  action="https://formspree.io/f/xgebjdvw"
                  method="POST"
                >
                  <h1 className="text-xl text-center">Contact us !</h1>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="mobile" className="block font-medium mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="address" className="block font-medium mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="pincode" className="block font-medium mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="village" className="block font-medium mb-1">
                      Village
                    </label>
                    <input
                      type="text"
                      id="village"
                      name="village"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
