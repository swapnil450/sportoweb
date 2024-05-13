import { Button } from '@nextui-org/react';
import React, { useEffect, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from 'react-simple-captcha';

function CaptchaTest({ setCheck }) {
    const userCaptchaInputRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const doSubmit = () => {
        const userCaptcha = userCaptchaInputRef.current.value;

        if (validateCaptcha(userCaptcha)) {
            loadCaptchaEnginge(6);
            toast.success("Captcha Matched !")
            userCaptchaInputRef.current.value = '';
            setCheck(true)
        } else {
            toast.error("Captcha is Not Correct !")
            userCaptchaInputRef.current.value = '';
            setCheck(false)
        }
    };

    return (


        <div className="form-group border flex justify-center items-center flex-col w-full mb-5 rounded-lg p-3">
            <div className="col mt-3">
                <LoadCanvasTemplate />
            </div>
            <div className="col mt-3">
                <div>
                    <input
                        placeholder="Enter Captcha Value"
                        id="user_captcha_input"
                        name="user_captcha_input"
                        type="text"
                        className='h-10 rounded-lg p-2 border'
                        ref={userCaptchaInputRef}
                    ></input>
                </div>
            </div>
            <div className="col mt-3">
                <div>
                    <Button
                        size='sm'
                        className="bg-sky-500 text-white"
                        onClick={() => doSubmit()}
                    >
                        Submit Captcha
                    </Button>
                </div>
            </div>
        </div>


    );
}

export default CaptchaTest;
