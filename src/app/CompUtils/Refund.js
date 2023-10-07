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

export default function Refund() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("5xl");

  const sizes = ["5xl"];

  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };

  return (
    <>
      {sizes.map((size) => (
        <Button
          className="bg-trasparent text-white"
          key={size}
          size="sm"
          onPress={() => handleOpen(size)}
        >
          Refund Policy
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
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <h2 className="text-3xl font-semibold text-center mb-4">
                  Refund Policy !
                </h2>
                <article className="text-sm text-black">
                  <p>Welcome to SoilBooster.in!</p>
                  <p>currently we have not any kind of refund policy !</p>
                </article>
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
