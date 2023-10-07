"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    cssEase: "fade",
  };

  return (
    <div className="lg:w-[700px] w-[370px] h-auto mx-auto mt-10 lg:mt-0 px-6 ">
      <Slider {...settings}>
        <div className=" w-full rounded-[40px] ">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                What to watch
              </p>
              <h4 className="text-white font-medium text-large">
                Stream the Acme event
              </h4>
            </CardHeader>
            <Image
              loading={`lazy`}
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/Hero/sec2.webp"
            />
          </Card>
        </div>
        <div className=" w-full rounded-[40px]">
          {" "}
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Plant a tree
              </p>
              <h4 className="text-white font-medium text-large">
                Contribute to the planet
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/Hero/sec3.webp"
            />
          </Card>
        </div>
        <div className="h-[400px] w-full rounded-[40px] ">
          <Card className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">
                Supercharged
              </p>
              <h4 className="text-white font-medium text-large">
                Creates beauty like a beast
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src="/img/Hero/sec.webp"
            />
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
