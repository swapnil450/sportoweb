"use client";
import React from "react";
import Account from "./Account";
import Password from "./Password";
export default function MyProfile() {
    return (
        <>
            <div className="flex justify-center items-center mt-10 flex-col gap-2 ">
                <h1 className="text-sm font-semibold mb-5 text-black">My Account</h1>
                <div className="flex flex-col justify-center items-center border rounded-lg  ">
                    <Account />
                    <Password />
                </div>
            </div>
        </>
    );
}
