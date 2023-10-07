import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
async function OrderPlaced(orderfinal, setOrderLoad, setStatus, onClose) {
  setOrderLoad(true);
  const CREATE_ORDER = `
    mutation Mutation($orderInput: OrderInput) {
        createOrder(orderInput: $orderInput) {
          message
          status
        }
      }
    `;

  await axios
    .post(`${process.env.GRAPHQL_SERVER}`, {
      query: `${CREATE_ORDER}`,
      variables: {
        orderInput: orderfinal,
      },
    })
    .then((res) => {
      if (res.data?.data?.createOrder?.status === true) {
        onClose();
        setStatus(true);
      }
    })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setOrderLoad(false);
    });

  return;
}

export default OrderPlaced;
