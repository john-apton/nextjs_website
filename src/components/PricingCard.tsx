"use client";
import { AnnualList, CampaignList, MonthList } from "@constants/home";
import Image from "next/image";
import React, { useState } from "react";

const BrandStyle = {
  width: `calc(100% / 3)`,
};

const PricingCard = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleClick = (option: string) => {
    setSelectedOption(option);
  };

  interface SubtitleData {
    id: number;
    name: string;
    content?: string;
    icon?: string;
    lifeTime?: string;
    limit?: string;
    number?: string;
    speed?: string;
    icon2?: string;
    lifeTime1?: string;
    limit1?: string;
    number1?: string;
    speed1?: string;
    icon3?: string;
    lifeTime2?: string;
    limit2?: string;
    number2?: string;
    speed2?: string;
    speed3?: string;
  }

  return (
    <div className="w-full relative">
      <div className="w-full align-center flex flex-col justify-center text-center">
        <div className="text-[3vw] font-sora font-bold text-[white]">
          Flexible and{" "}
          <span className="pl-1 from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora font-bold ">
            Transparent Pricing
          </span>
        </div>
        <p className="xs:text-[1.5vw] md:text-[0.95vw] text-[#616874] font-medium font-Inter">
          Pricing built for businesses of all sizes. Always know what you’ll
          pay.
        </p>
      </div>

      <div className=" w-full h-[17vh] flex md:flex-row items-center md:my-16 sticky top-[5rem]  backdrop-blur-xl xs:flex-col xs:p-6 xs:my-6 xs:gap-10 md:gap-0">
        <div className="md:w-[30%] h-full flex flex-row justify-center items-center md:border-b border-b-[#2D3154] xs:w-full">
          <div className="bg-[] flex flex-row gap-5 justify-center items-center p-[0.6vw] rounded-[46px] w-[60%] border border-[#4A2DAA]">
            {["monthly", "yearly"].map((option: string) => (
              <p
                key={option}
                onClick={() => handleClick(option)}
                className={`md:w-[10vw] px-[2vw] py-[0.6vw] rounded-[2vw] md:text-[0.95vw] font-semibold font-Inter text-center transition-colors ease-linear duration-300 xs:text-[2.5vw] cursor-pointer`}
                style={{
                  color: selectedOption === option ? "#F6EDFF" : "#2B2E4F",
                  backgroundColor:
                    selectedOption === option ? "#4A2DAA" : "#0C0B24",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </p>
            ))}
          </div>
        </div>

        <div className="md:w-[60%] h-full border-b border-b-[#2D3154] xs:w-full">
          <div className="w-full h-full flex flex-row items-center justify-between cursor-pointer">
            {(selectedOption === "monthly" ? MonthList : AnnualList)?.map(
              (data) => (
                <div
                  key={data.name}
                  style={BrandStyle}
                  className="flex flex-col text-center items-center justify-center pb-10 pt-5   border-r-[#2D3154] border-b-[#2D3154]"
                >
                  <span className="md:text-[1.5vw] text-[#55567A] font-Sora font-semibold xs:text-[3vw]">
                    {data.name}
                  </span>
                  <p className="text-[2vw]  font-Inter font-bold text-[#FFFFFF] flex flex-row justify-center xs:pt-2 md:pt-0">
                    {data.value}
                    {data?.text && (
                      <span className="text-[#FFFFFF] font-Sora  md:text-[0.95vw] font-medium md:pt-4 md:pl-2 xs:text-[2vw]">
                        {data.text}
                      </span>
                    )}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="layout h-full -mt-[2vw] py-10 xs:p-6">
        {CampaignList.map((data) => (
          <React.Fragment key={data.title}>
            <div className="flex flex-col bg-[] mt-6 p-3.5">
              <div className="flex flex-row items-center xs:justify-center md:justify-start">
                <span
                  className="px-2.5 md:text-[1vw] font-Inter  font-semibold  capitalize xs:text-[3vw] rounded-r-full border py-2"
                  style={{
                    color: data.color,
                    borderColor: data.border,
                    borderRadius: "50px",
                  }}
                >
                  {data.title}
                </span>
              </div>
              {data?.title2 && (
                <div className="flex flex-row pl-4 pt-2">
                  <p className="text-[red]">**</p>
                  <p className="md:text-[0.75vw] font-Inter font-medium text-[white] pl-2 xs:text-[2.2vw]">
                    {data?.title2}
                  </p>
                </div>
              )}
            </div>

            <div className=" flex flex-col">
              {data?.subtitle?.map((data: SubtitleData) => (
                <div
                  className="flex md:flex-row w-[100%] border-b border-b-[#2D3154] xs:flex-col xs:items-center xs:gap-3 md:gap-0 xs:py-3 md:p-0"
                  key={data?.id}
                >
                  <div className="md:w-[40%] flex flex-row p-[1.2vw] xs:justify-center md:justify-start xs:w-[100%]">
                    <p className="md:text-[0.85vw]  font-Inter font-medium text-[white] md:pl-[1.8rem] xs:text-[2.2vw] ">
                      {data?.name}
                    </p>
                    {data?.content && (
                      <p className=" font-Inter md:text-[0.75vw] font-semibold text-[#0ACD95] pl-2 xs:text-[2.2vw]">
                        {data?.content}
                      </p>
                    )}
                  </div>

                  <div className=" md:!w-[60%] flex flex-row xs:w-[100%]">
                    {data?.icon && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-col items-center justify-center"
                      >
                        <Image
                          src={data?.icon}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.lifeTime}
                        </p>
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.limit}
                        </p>
                      </div>
                    )}
                    {data?.number && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#E8E8EA] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.number}
                        </p>
                      </div>
                    )}
                    {data?.speed && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[2.5vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-Inter font-semibold text-[white]">
                          {data?.speed}
                        </p>
                      </div>
                    )}
                    {data?.icon2 && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-col items-center justify-center"
                      >
                        <Image
                          src={data?.icon2}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.lifeTime1}
                        </p>
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.limit1}
                        </p>
                      </div>
                    )}
                    {data?.number && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#E8E8EA] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.number1}
                        </p>
                      </div>
                    )}

                    {data?.speed && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[2.5vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-Inter font-semibold text-[white]">
                          {data?.speed1}
                        </p>
                      </div>
                    )}
                    {data?.icon3 && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-col items-center justify-center"
                      >
                        <Image
                          src={data?.icon3}
                          alt=""
                          className="w-[20px] h-[20px]"
                        />
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.lifeTime2}
                        </p>
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.limit2}
                        </p>
                      </div>
                    )}
                    {data?.number && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#E8E8EA] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[3vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-semibold text-[#616874]">
                          {data?.number2}
                        </p>
                      </div>
                    )}
                    {data?.speed && (
                      <div
                        style={BrandStyle}
                        className="md:border-l border-l-[#2D3154] flex flex-row items-center justify-center"
                      >
                        <p className="xs:text-[2.5vw] sm:text-[1vw] md:text-[1.5vw] xl:text-[0.75vw] 2xl:text-[0.75vw] font-Inter font-semibold text-[white]">
                          {data?.speed3}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
