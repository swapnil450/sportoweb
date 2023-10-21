"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { DataProvideBYHook } from "../../DataProviderContext/DataProviderContext";
import { gql, useQuery } from "@apollo/client";
import ListOfOrder from "../Component/ListOfOrder";
import NoorderFound from "../Component/NoorderFound"
export default function DataOfOrder() {
  const { user } = DataProvideBYHook();

  const GET_ORDER_EMAIL = gql`
    query Query($getOrderByEmailIdId: String!) {
      getOrderByEmailId(id: $getOrderByEmailIdId) {
        _id
        active
        canceled
        canceledByUser
        createdAt
        delivered
        email
        orderid
        process
        productsDetails {
          image
          price
          product
          qnt
          selPrice
          selWght
          form
        }
        totalAmount
      }
    }
  `;

  const { data, loading, error, refetch } = useQuery(GET_ORDER_EMAIL, {
    variables: {
      getOrderByEmailIdId: `${user?.email || "e"}`,
    },
  });
  const OrderData = data?.getOrderByEmailId;
  return (
    <>
      {
        OrderData?.length === 0 ? <NoorderFound /> : <div className="flex flex-col justify-center items-center ">
          <ListOfOrder
            OrderData={OrderData}
            refetch={refetch}
            loading={loading}
          />
        </div>
      }
    </>
  );
}
