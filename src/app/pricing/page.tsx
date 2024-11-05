"use client";
import PricingCard from "@components/PricingCard";
import Calculator from "@components/Calculator";

import Growth from "@components/Growth";
import { PricingCardList, pricing } from "@constants/home"; 
import Image from "next/image";
import { useState } from "react";
import PlanCard from "@components/PlanCard";
import DigitalMarketing from "@components/DigitalMarketing";
import BrandScroll from "@components/BrandScroll";

import PricingBackground from "@icons/pricing.svg";

export default function PricingPage() {
  return (
    <div>
      <div className="w-full h-auto  ">
        <div className="relative flex flex-col align-center items-center justify-center">
          <Image src={PricingBackground} alt="" />
          <div className="absolute top-10 flex flex-col align-center items-center justify-center">
            <div className="  align-center items-center justify-center xs:text-[3.1vw] md:text-[3.2vw] font-bold text-white">
              Get Started with Zero Setup Fee
            </div>
            <p className="xs:text-[3vw] md:text-[3.2vw] font-bold font-raleway from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              & Affordable Pricing
            </p>
            <span className="xs:text-[2.5vw] md:text-[1vw] font-semibold text-[#616874] md:pt-5 xs:pt-2  font-Inter">
              First 1,000 service conversations per month for free*
            </span>
          </div>
        </div>

        <div className=" absolute top-[20vw] left-[20vw]">
          <div className="md:w-[100%] lg:flex lg:justify-center xs:justify-between xs:px-10 xs:grid xs:grid-cols-2 xs:gap-5 md:gap-0 md:grid-cols-3 md:place-items-center lg:place-items-start py-10">
            {PricingCardList?.map((data) => (
              <div
                key={data?.id}
                className="flex flex-col md:w-[10vw] items-center gap-5"
              >
                <div className=" xs:w-[30vw] xs:h-[13vh] md:w-[10vh] md:h-[10vh] border border-[#908EB5] rounded-full flex justify-center bg-[#060A22] shadow-[0px_4px_16px_0px_#2D30360F]">
                  <Image src={data?.icon} alt={data?.content} className="md:w-[2vw]" />
                </div>
                <p className=" font-Inter flex items-center justify-center md:text-[1vw] font-medium text-white w-[8vw] text-center xs:text-[3vw]">
                  {data?.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <PlanCard />
      </div>

      <div className="bg-[#060A22]">
        <div className="pt-10">
          <PricingCard />
        </div>
        <Calculator />

        <DigitalMarketing />
        <div className="mt-[10vw]">
          <BrandScroll />
        </div>
        <div className="py-10">
          <Growth />
        </div>
      </div>
    </div>
  );
}
