"use client";
import React from "react";
import { createContext, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import axios from "axios";
import { useSelector } from "react-redux";
const DataContaxt = createContext();
export default function DataProviderContext({ children }) {
  const [user, setUser] = React.useState(false);

  const LoadVAlue = useSelector((state) => {
    return state.LoadMore
  })
  const TypeProduct = useSelector((state) => {
    return state.ProductType
  })



  React.useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("user")) || {};
    setUser(user);
  }, []);

  const Product = gql`
  query Query($first: Int, $last: Int,$type:String) {
    products(first: $first, last: $last, type: $type) {
      Data {
        Advantages
        Quantity
        _id
        description
        form
        image
        main_ingredient
        off
        praman
        price
        pricelist
        product_name
        review
        stock
        type
      }
      length
    }
  }
  `;

  const { data, loading, error } = useQuery(Product, {
    variables: {
      first: 0,
      last: Number(LoadVAlue),
      type: String(TypeProduct)
    }
  });

  const proData = data?.products?.Data
  const DataLength = data?.products?.length

  return (
    <>
      <DataContaxt.Provider value={{ proData, loading, user, DataLength }}>
        {children}
      </DataContaxt.Provider>
    </>
  );
}

const DataProvideBYHook = () => {
  return useContext(DataContaxt);
};

export { DataProvideBYHook, DataContaxt, DataProviderContext };
