import { Avatar } from '@nextui-org/react'
import React from 'react'
import { User } from "@nextui-org/react";
import { DataProvideBYHook } from '@/app/DataProviderContext/DataProviderContext'
export default function Account() {
    const { user } = DataProvideBYHook()
    return (
        <>
            <div className='flex flex-col gap-3 justify-center items-center  w-full p-5'>
                <User
                    name={user?.name}
                    description={user?.email}
                />
            </div>

        </>
    )
}
