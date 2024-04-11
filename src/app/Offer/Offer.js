import React from "react";
import DataOffer from "./Data";
import Image from "next/image";
import Link from "next/link"
export default function Offer({link}) {
  return (
    <>
      <div>
        <div class="container w-full flex justify-center items-center">
            
                    <div class="w-auto  flex justify-center md:justify-end">
                      <Link href={`#Prod`}>
                      <Image unoptimized src={link} width={0} className="w-full" height={0} />
                      </Link>
                    </div>
        </div>
      </div>
    </>
  );
}
