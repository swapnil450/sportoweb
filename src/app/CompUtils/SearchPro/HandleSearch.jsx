import React from "react";
import ListSearchProduct from "./ListSearchProduct";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { Input } from "@nextui-org/react";

export const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);
export default function HandleSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("opaque");

  const backdrops = ["blur"];

  const handleOpen = (backdrop) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const [search, setSearch] = React.useState("");

  return (
    <>
      {backdrops.map((b) => (
        <Image
          key={b}
          className="cursor-pointer"
          onClick={() => handleOpen(b)}
          src="/img/search.png"
          alt="S"
          width={22}
          height={22}
        />
      ))}

      <Modal
        backdrop={backdrop}
        isOpen={isOpen}
        placement={`center`}
        onClose={onClose}
        scrollBehavior={`outside`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-5 flex justify-center items-center">
                {" "}
                <Input
                  isClearable
                  value={search}
                  className="w-full mt-5"
                  size="lg"
                  onChange={(e) => setSearch(e.target.value)}
                  radius="lg"
                  placeholder="Type to search..."
                  startContent={
                    <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <ListSearchProduct search={search} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
