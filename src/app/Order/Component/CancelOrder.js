import React, { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { toast } from "react-toastify";
import axios from "axios";

export default function CancelOrder({ id, isDelivered, refetch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [load, setLoad] = useState(false);

  const handleCancelOrder = async (id) => {
    setLoad(true);
    const CANCEL_ORDER = `
    mutation Mutation($input: OrderInput, $id: String) {
        UpdateOrder(input: $input, _id: $id) {
          message
          status
        }
      }
      `;

    await axios
      .post(`${process.env.GRAPHQL_SERVER}`, {
        query: `${CANCEL_ORDER}`,
        variables: {
          input: {
            canceledByUser: true,
          },
          id: String(id),
        },
      })
      .then((res) => {
        if (res?.data?.data?.UpdateOrder?.status === true) {
          toast.success(`Order Canceled Sucessfully`, {
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
        }
      })

      .catch((err) => {
        if (err) {
          toast.error();
          `${"Something Wrrong"}`,
          {
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
          };
        }
      })
      .finally(() => {
        refetch();
        setLoad(false);
      });
  };

  return (
    <>
      {isDelivered === false ? (
        <button onClick={onOpen} className="bg-gray-100 rounded-lg text-xs p-2">
          Cancel Order?
        </button>
      ) : null}
      <Modal size={`sm`} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Cancel Order
              </ModalHeader>
              <ModalBody className="flex justify-center  items-center">
                <h1>🚨Instruction about Cancel Order</h1>
                <ul class="list-disc p-3">
                  <li>
                    If You Pay Online after Order Cancelation Payment Will
                    Refunded Withinn 7 to 15days
                  </li>
                  <li>Are you sure you want to cancel this order? </li>
                  <li>This action cannot be undone.</li>
                </ul>
              </ModalBody>
              <ModalFooter>
                {load === true ? (
                  <Button isLoading={true}>Wait...</Button>
                ) : (
                  <Button onPress={() => handleCancelOrder(id)}>
                    🚨Cancel Order
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
