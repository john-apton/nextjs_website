"use client";
import { pricing } from "@constants/home";
import Image from "next/image";
import React, { useState } from "react";

import starter from "@icons/GroupStarter.svg";
import growth from "@icons/growth.svg";
import magnum from "@icons/meganum.svg";

// import "./usagePlan.css";

export default function PlanCard() {
  const [isUpgrade, setIsUpgrade] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("Monthly");

  const handleCancelUpgradePlans = () => setIsUpgrade(false);

  const PlansCard = ({ plan }: { plan: string }) => {
    return (
      <button
        className={`md:w-[10vw] xs:w-[30vw] md:px-[2vw] md:py-[0.6vw] xs:px-[5vw] xs:py-[2vw] md:rounded-[2vw] xs:rounded-[5vw] xs:text-[3vw] md:text-[0.95vw] font-semibold text-center transition-colors ease-linear duration-300  ${
          selectedPrice === plan
            ? "text-[#F6EDFF] bg-[#4A2DAA]"
            : "bg-transparent text-[#2B2E4F]"
        }`}
        onClick={() => {
          setSelectedPrice(plan);
        }}
      >
        {plan}
      </button>
    );
  };

  return (
    <div className="from-[#2D3154] via-[#080724] to-[#2D3154] bg-gradient-to-r">
      <div className="p-[2vw]">
        <div className="flex flex-col items-center justify-center pb-[2vw] relative">
          <div className="w-fit relative">
            <div className="flex flex-col items-center">
              <div className="w-fit flex items-center justify-center px-[0.6vw] py-[0.6vw] bg-[#0C0B24] md:rounded-[2vw] xs:rounded-[5vw]">
                <PlansCard plan={"Monthly"} />
                <PlansCard plan={"Yearly"} />
              </div>
              <div className="  mt-[2vw] from-[#0ACD95] via-[#0ACD95] to-[#05674B] bg-gradient-to-r rounded-full px-2 w-full flex justify-center items-center">
                <p className="p-[0.85vw]  font-Inter font-medium xs:w-[70vw] xs:text-center xs:text-[3vw] md:text-[1vw] text-white  leading-2	">
                  🎉 Get 2 months free with annual subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit flex xs:flex-col lg:flex-row justify-center mt-10 md:flex-col xs:justify-center xs:items-center md:align-center md:items-center py-10">
        {pricing?.map((p: any) => {
          const isGrowthPlan = p.title === "Growth";

          return (
            <div
              key={p.title}
              className={`min-w-[15vw] xs:w-[70vw] md:max-w-[30vh] flex justify-center items-center h-auto min-h-[70vh] lg:max-w-[22vw] rounded-[1.375vw] p-[0.25vw] border border-[#616BC1] relative ${
                isGrowthPlan ? "z-10" : "z-10"
              } ${
                p.title === "Starter"
                  ? "hover:border-[4px] hover:border-[#6940F2]"
                  : p.title === "Growth"
                  ? "hover:border-[4px] hover:border-[#3A69E3]"
                  : p.title === "Magnum"
                  ? "hover:border-[4px] hover:border-[#09CC94]"
                  : "border border-[#6940F2]"
              }`}
            >
              <div
                className={`absolute -top-[7vw] left-[5vw] ${
                  p.title === "Starter" ? "" : ""
                }`}
              >
                {p.title === "Starter" ? (
                  <Image src={starter} alt="s" className="w-[11vw]" />
                ) : p.title === "Growth" ? (
                  <Image src={growth} alt="s" className="w-[11vw]" />
                ) : p.title === "Magnum" ? (
                  <Image src={magnum} alt="s" className="w-[11vw]" />
                ) : null}
              </div>
              <div className="w-full h-full rounded-[1.2vw] md:px-[1vw] md:py-[1.2vw] xs:py-[5vw] xs:px-[3vw]">
                <div className="flex items-center justify-between pb-[1vw]"></div>
                <h3
                  className={`md:text-[1.2vw] font-medium text-[white] font-inter  xs:text-[3.5vw] rounded-full flex justify-center w-full max-w-[50%] items-center m-auto py-2 ${
                    p.title === "Starter"
                      ? "border border-[#6940F2] "
                      : p.title === "Growth"
                      ? "border border-[#3A69E3]"
                      : p.title === "Magnum"
                      ? "border border-[#09CC94]"
                      : "border border-[#6940F2]"
                  }`}
                >
                  {p.title}
                </h3>

                <div
                  className="mt-[0.7vw] items-center w-full flex justify-center"
                  style={{
                    borderBottom: "1px solid #6940F2",
                    borderBottomColor:
                      "linear-gradient(to right, #27156200 0%, #6940F2 100%, #27156200 0%)",
                  }}
                >
                  <span className="md:text-[2vw] xs:text-[5vw] font-bold text-[white] font-Inter ">
                    {p?.custom
                      ? "Custom"
                      : p?.[selectedPrice?.toLowerCase()]?.price}
                  </span>
                  {!p?.custom && (
                    <span className="font-medium text-[white] font-Inter pl-2">
                      / {selectedPrice === "Monthly" ? "Month" : "Yearly"}
                    </span>
                  )}
                </div>

                <div className="flex flex-row font-medium font-Inter text-white pt-[1vw] md:text-[1vw] xs:text-[4vw] w-full items-center">
                  <Image
                    src={p?.[selectedPrice?.toLowerCase()]?.tick}
                    alt="icon"
                    className="lg:w-[3vw] md:w-[20px] xs:w-[16px]"
                  />
                  <span>
                    {!p
                      ? selectedPrice === "Monthly"
                        ? `${p[selectedPrice.toLowerCase()]?.yearly}`
                        : `${p[selectedPrice.toLowerCase()]?.yearly}`
                      : "Business Verification"}
                  </span>
                  <Image
                    src={p?.[selectedPrice?.toLowerCase()]?.tick2}
                    alt="icon"
                    className="ml-4 lg:w-[1vw] md:w-[20px] xs:w-[16px]"
                  />
                </div>

                <div className="xs:text-[4vw] w-full items-center flex flex-row  font-Inter font-medium text-[white] pt-[0.5vw] pb-[1.5vw] border-b-[0.08vw] border-[#6940F2] md:text-[1vw]">
                  <Image
                    src={p?.[selectedPrice?.toLowerCase()]?.tick1}
                    alt="icon"
                    className="lg:w-[3vw] md:w-[18px] xs:w-[16px]"
                  />
                  <span>
                    {!p
                      ? selectedPrice === "Monthly"
                        ? `${p[selectedPrice.toLowerCase()]?.yearly}`
                        : `${p[selectedPrice.toLowerCase()]?.yearly}`
                      : "Green Tick"}
                  </span>
                  <Image
                    src={p?.[selectedPrice?.toLowerCase()]?.tick3}
                    alt="icon"
                    className="ml-[6vw] lg:w-[1vw] md:w-[18px] xs:w-[16px]"
                  />
                </div>

                <p className="w-[100%] h-[5vh] font-Inter font-medium md:text-[1.3vw] xs:text-[3vw] lg:text-[0.789vw] text-[#616874] mt-[2vw]">
                  {p?.content}
                </p>
                <div className="h-[10vh] flex items-center gap-5">
                  <button className="getButton get_button">Get Started</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
