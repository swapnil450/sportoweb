import { Button } from '@nextui-org/react'
import React from 'react'
import { useRouter } from 'next/navigation'
export default function NoorderFound() {
    const router = useRouter()
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='flex justify-center flex-col gap-3 mb-[70px] items-center'>
                    <p className='lg:text-xl text-sm font-bold '>😀 Order Not Found 😀 </p>
                    <Button className='bg-teal-500 text-white ' onClick={() => router.push("/#prod")}>Order Now</Button>
                </div>
            </div>

        </>
    )
}
