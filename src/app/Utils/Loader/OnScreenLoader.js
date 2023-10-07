"use client";
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
import Loader from "./Loader";

export default function OnScreenLoader({ status }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        radius={`none`}
        shadow={`none`}
        className="bg-transparent"
        size={`xs`}
        backdrop={`opaque`}
        isOpen={status}
        placement={`center`}
        closeButton={false}
      >
        <ModalContent className="bg-transparent">
          <Loader />
        </ModalContent>
      </Modal>
    </>
  );
}
