"use client";
import React from "react";
import { createContext, useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import axios from "axios";

const DataContaxt = createContext();
export default function DataProviderContext({ children }) {
  const [user, setUser] = React.useState(false);

  React.useEffect(() => {
    const user = JSON.parse(localStorage?.getItem("user")) || {};
    setUser(user);
  }, []);

  const Product = gql`
    query Query {
      products {
        Advantages
        Quantity
        _id
        description
        form
        image
        main_ingredient
        praman
        price
        pricelist
        product_name
        review
        stock
        type
      }
    }
  `;

  const { data, loading, error } = useQuery(Product);
  const proData = data?.products;

  return (
    <>
      <DataContaxt.Provider value={{ proData, loading, user }}>
        {children}
      </DataContaxt.Provider>
    </>
  );
}

const DataProvideBYHook = () => {
  return useContext(DataContaxt);
};

export { DataProvideBYHook, DataContaxt, DataProviderContext };
