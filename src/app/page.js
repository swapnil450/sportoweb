import Hero from "./CompUtils/Hero.tsx/Hero";
import PopularProd from "./PopularProd/PopularProd";
import Categoriespro from "./Featuresutils/Categories";
import Offer from "../app/Offer/Offer";
import { ToastContainer, toast } from "react-toastify";
export default function page() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col justify-center items-center lg:gap-5 gap-5 p-2">
        {/* <Categoriespro /> */}
        {/* <Hero /> */}
        {/* <div className="grid lg:grid-cols-2 grid-cols-2 md:grid-cols-3 mt-[30px]   gap-3 lg:gap-5"> */}
        <Offer
          link={`https://res.cloudinary.com/dutpoqbev/image/upload/v1713767301/4_kt2h1v.png`}
        />
        {/* </div> */}
        <PopularProd />
      </div>
    </>
  );
}
