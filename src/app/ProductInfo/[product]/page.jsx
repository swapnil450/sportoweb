"use client";

import React from "react";
import { Container, Header, Content, Footer, Sidebar } from "rsuite";
import MainDetails from "../MainDetails";

export default function page() {
  return (
    <>
      <Container>
        <Header></Header>
        <Content className="flex flex-col lg:gap-[10px] gap-[30px]">
          <MainDetails />
        </Content>
        <Footer></Footer>
      </Container>
    </>
  );
}
