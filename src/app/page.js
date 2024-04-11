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
        <Offer link={`https://contents.mediadecathlon.com/s1081697/k$f54f524c7331145dbf08a34bc9b2ab18/defaut.jpg?format=auto&quality=70&f=1024x0
`} />
        <PopularProd />
      </div>
    </>
  );
}
