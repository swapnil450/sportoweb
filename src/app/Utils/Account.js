import React from "react";
import Image from "next/image";
import { DataProvideBYHook } from "../DataProviderContext/DataProviderContext";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  Badge,
  DropdownMenu,
  Avatar,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
export default function Account() {
  const Router = useRouter()
  const { user } = DataProvideBYHook();
  const SignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="w-6 h-6 text-tiny"
            name="cs"
            size="xs"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold text-sm">{user?.name}</p>
            <p className="font-semibold text-xs">{user.email}</p>
          </DropdownItem>
          <DropdownItem onClick={() => Router.push("/MyProfile")} key="settings"> My Account</DropdownItem>
          <DropdownItem onClick={() => Router.push("/Order")} key="team_settings">My Order</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Support</DropdownItem>
          <DropdownItem
            onClick={SignOut}
            key="logout"
            className="hover:bg-teal-500"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
