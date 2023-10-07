import React from 'react'
import MyProfile from './Comp/MyProfile'
import { ToastContainer } from 'react-toastify'
export default function page() {
    return (
        <>
            <ToastContainer />
            <div className='flex justify-center items-center '>
                <MyProfile />
            </div>
        </>
    )
}
