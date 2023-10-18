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
export default function SignIn({ status, setStatus, setStatusca }) {
  const Router = useRouter();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [load, setLoad] = useState(false);
  const HandleShiftSignin = () => {
    setStatus(false)
    setStatusca(true)
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

  const SIGNIN = `
    mutation Mutation($data: userSignIn!) {
      SignInUser(data: $data) {
        User {
          _id
          acctype
          email
          mobile
          name
        }
        error {
          message
        }
        message
      }
    }
  `;

  // const [SignInUser, { data, loading, error }] = useMutation(SIGNIN);

  const HandleLogin = async (login, event, SIGNIN, onClose) => {
    setLoad(true);
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

    const sanitizedEmail = DOMPurify.sanitize(login.email);
    const sanitizedPassword = DOMPurify.sanitize(login.password);

    await axios
      .post(`${process.env.GRAPHQL_SERVER}`, {
        query: `${SIGNIN}`,
        variables: {
          data: {
            email: String(sanitizedEmail),
            password: String(sanitizedPassword),
          },
        },
      })
      .then((res) => {
        const data = res?.data?.data?.SignInUser;
        if (data?.error.message) {
          toast.error(data?.error.message);
          setLogin({
            password: "",
          });
        } else {
          toast.success(data?.message);
          setLogin({
            email: "",
            password: "",
          });
          if (data?.User.name) {
            localStorage.setItem("user", JSON.stringify(data?.User));
            setStatus(false)
            setTimeout(() => {
              onClose();
              window.location.reload();
            }, 2000);
          }
        }
      })
      .catch((err) => { })
      .finally(() => {
        setLoad(false)
        setLogin({
          email: "",
          password: ""
        })
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

      <Modal isOpen={status} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <div class="p-5 bg-white md:flex-1">
                  <h3 class="my-4 text-2xl font-semibold text-gray-700">
                    Account Login
                  </h3>
                  <form action="#" class="flex flex-col space-y-5">
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
                        name="email"
                        value={login.email}
                        maxLength={50}
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
                          class="text-xs text-gray-400 hover:underline focus:text-gray-500"
                        >
                          Forgot Password?
                        </a>
                      </div>
                      <input
                        name="password"
                        value={login.password}
                        onChange={(event) => handleInputChange(event)}
                        type="password"
                        maxLength={20}
                        id="password"
                        class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                      />
                    </div>

                    {/* <div>
                      <button
                        type="submit"
                        
                        class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-[#00DDB8] rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                      >
                        Log in
                      </button>
                    </div> */}
                    {load ? (
                      <Button
                        isLoading
                        className="font-semibold text-sm text-white transition-colors duration-300 bg-[#00DDB8]"
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
                        className="font-semibold text-sm text-white transition-colors duration-300 bg-[#00DDB8]"
                        onClick={(event) =>
                          HandleLogin(login, event, SIGNIN, onClose)
                        }
                      >
                        Login
                      </Button>
                    )}

                    <div class="flex flex-col space-y-5">
                      <span class="flex items-center justify-center space-x-2">
                        <span onClick={HandleShiftSignin} class="font-normal cursor-pointer underline text-sm hover:text-teal-400 text-gray-400">
                          {" "}
                          Create Account{" "}
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
                  onPress={HandleShiftSignin}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
