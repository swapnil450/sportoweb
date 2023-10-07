import React from "react";
import Image from "next/image";
import suc from "../../../../public/suc.gif";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function SuccesBooking({ status, setStatus }) {
  const Router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const HandleChange = () => {
    // setStatus(false);
    Router.push("/Order");
  };

  return (
    <>
      <Modal
        size={`sm`}
        placement={`center`}
        isOpen={status}
        onClose={() => onClose(setStatus(false))}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col justify-center items-center m-5 gap-5">
                  <Image src={suc} width={200} height={200} alt="successicon" />
                  <p className="text-black font-bold text-sm">
                    Order Successfuly !
                  </p>

                  <Button onClick={HandleChange} size="sm">
                    Track Order
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
