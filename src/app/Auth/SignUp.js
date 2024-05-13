import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import DOMPurify from "dompurify";

import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function SignUp({ setStatus, statusca, setStatusca }) {

  const Router = useRouter();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [login, setLogin] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);

  const HandleShiftSignin = () => {
    setStatus(true)
    setStatusca(false)
  }

  const isEmailValid = (email) => {
    // A simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const SIGNUP = `
  mutation Mutation($input: userIn!) {
    createUser(input: $input) {
      error {
        message
      }
      message
      user {
        email
      }
    }
  }
  `;

  const HandleSignUp = async (login, event, SIGNUP, onClose) => {

    event.preventDefault();

    if (!isEmailValid(login.email)) {
      // Handle invalid email
      showToast("Invalid email address");
      return;
    }

    if (!isPasswordValid(login.password)) {
      // Handle invalid password
      showToast("Password must be at least 8 characters long");
      return;
    }
    setLoad(true);

    const email = DOMPurify.sanitize(login?.email)
    const mobile = DOMPurify.sanitize(login?.mobile)
    const name = DOMPurify.sanitize(login?.name)
    const password = DOMPurify.sanitize(login?.password)
    await axios
      .post(`${process.env.GRAPHQL_SERVER}`, {
        query: `${SIGNUP}`,
        variables: {
          input: {
            Active: true,
            acctype: `customer`,
            email: String(email),
            mobile: String(mobile),
            name: String(name),
            password: String(password)
          },
        },
      })
      .then((res) => {
        if (res?.data?.data?.createUser?.user?.email) {
          toast.success(res?.data?.data?.createUser?.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            style: {
              borderRadius: 10,
              font: "bold",
              fontSize: 15,
            },
          });
          setLoad(false)
          setLogin({
            email: "",
            password: "",
            name: "",
            mobile: ""
          })
          onClose()
          setStatus(true)
        } else if (res?.data?.data?.createUser?.user === null) {
          toast.error(res?.data?.data?.createUser?.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
            theme: "light",
            style: {
              borderRadius: 10,
              font: "bold",
              fontSize: 15,
            },
          });
        }

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoad(false)

      });
  };
  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: false,
      theme: "light",
      style: {
        borderRadius: 10,
        font: "bold",
        fontSize: 15,
      },
    });
  };

  return (
    <>
      <button
        onClick={() => setStatusca(true)}
        className="bg-sky-500 text-white font-semibold text-xs cursor-pointer rounded-lg p-2 "
      >
        Signup
      </button>

      <Modal isOpen={statusca} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div class="p-5 bg-white md:flex-1">
                  <h3 class="my-4 text-2xl font-semibold text-gray-700">
                    Create Account
                  </h3>
                  <form action="#" class="flex flex-col space-y-5">
                    <div class="flex flex-col space-y-1">
                      <label
                        for="email"
                        class="text-xs font-semibold text-gray-500"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="text"
                        name="name"
                        maxLength={40}
                        value={login.name}
                        onChange={(event) => handleInputChange(event)}
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <label
                        for="email"
                        class="text-xs font-semibold text-gray-500"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        maxLength={40}
                        name="email"
                        value={login.email}
                        onChange={(event) => handleInputChange(event)}
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <label
                        for="mobile"
                        class="text-xs font-semibold text-gray-500"
                      >
                        Mobile No
                      </label>
                      <input
                        type="text"
                        id="mbno"
                        name="mobile"
                        maxLength={12}
                        value={login.mobile}
                        onChange={(event) => handleInputChange(event)}
                        autofocus
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                    </div>
                    <div class="flex flex-col space-y-1">
                      <div class="flex items-center justify-between">
                        <label
                          for="password"
                          class="text-xs font-semibold text-gray-500"
                        >
                          Password
                        </label>
                        <a
                          href="#"
                          class="text-xs text-gray-600 hover:underline focus:text-teal-500"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <input
                        name="password"
                        value={login.password}
                        maxLength={20}
                        onChange={(event) => handleInputChange(event)}
                        type="password"
                        id="password"
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                    </div>


                    {load ? (
                      <Button
                        isLoading
                        className="font-semibold text-sm text-white transition-colors duration-300 bg-sky-500"
                        spinner={
                          <svg
                            className="animate-spin h-5 w-5 text-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      >
                        Wait
                      </Button>
                    ) : (
                      <Button
                        className="font-semibold text-sm text-white transition-colors duration-300 bg-sky-500"
                        onClick={(event) =>
                          HandleSignUp(login, event, SIGNUP, onClose)
                        }
                      >
                        Create Account
                      </Button>
                    )}

                    <div class="flex flex-col space-y-5">
                      <span class="flex items-center justify-center space-x-2">
                        <span onClick={HandleShiftSignin} class="font-normal underline text-sm cursor-pointer hover:text-teal-400  text-gray-400">
                          {" "}
                          Sign In Now{" "}
                        </span>
                      </span>
                    </div>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="flat"
                  className="bg-gray-200 text-black font-semibold text-xs "
                  onPress={() => setStatusca(false)}
                >
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
