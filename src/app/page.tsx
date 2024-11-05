"use client";

import Image from "next/image";

import Video from "@icons/Strategy--giff.gif";
import Video1 from "@icons/SegementVideo.gif";

import Header from "@icons/header.gif";

import MetaIcon from "@icons/meta.svg";
import MainImage from "@icons/homelcon.svg";

import LightBackGround from "@icons/light.svg";
import HomePage from "@icons/HomePage.svg";
import Marketing_first from "@icons/Strategy Animation.svg";
import SegmentAnimation from "@icons/Segment Animation.svg";
import Strategy from "@icons/Strategy.svg";
import Segmentation from "@icons/Segmentation.svg";
import Scale from "@icons/Scale.svg";
import DigitalMarketing from "@components/DigitalMarketing";
import Goals from "@components/Goals";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import BrandScroll from "@components/BrandScroll";
import Growth from "@components/Growth";

export const MarketingGoalsList = [
  {
    id: 1,
    // Image: {
    //   src: "../src/assets/Icons/meta.svg",
    //   width: 50,
    //   height: 50,
    // },
    content: "Anticipates ",
    content1: "Market Trends",
    details:
      "Leverage AI to stay ahead by predicting market shifts with precision.",
  },
  {
    id: 2,
    content: "Generate ",
    content1: "Target Audience",
    details:
      "AI-driven insights to identify and attract your ideal customers effortlessly.",
  },
  {
    id: 3,
    content: "Specific ",
    content1: "Channel Targeting",
    details:
      "Optimize outreach with AI-powered targeting for the most effective channels.",
  },
];

export default function Home() {
  const imageRef = useRef(null);

  const divRef = useRef(null);
  const goalsRef = useRef(null);
  const imageContainerRef = useRef(null); // Reference for the image container

  useEffect(() => {
    gsap.to(imageRef.current, {
      scale: 1.05,
      rotation: 5,
      yoyo: true,
      repeat: -1,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    if (divRef.current && goalsRef.current && imageContainerRef.current) {
      const goalsPosition =
        goalsRef.current.getBoundingClientRect().top + window.scrollY;

      // Get the position of the image container
      const imageContainerPosition =
        imageContainerRef.current.getBoundingClientRect().top + window.scrollY;

      // Adjust the position to focus on the left side of the image
      const leftOffset = imageContainerRef.current.offsetWidth / 2;

      // Animate to the Goals section on initial scroll
      gsap.to(divRef.current, {
        y: goalsPosition - divRef.current.offsetHeight / 2,
        duration: 1,
        scrollTrigger: {
          trigger: goalsRef.current,
          start: "top center", // When the top of the Goals component hits the center of the viewport
          end: "bottom center", // When the bottom of the Goals component hits the center of the viewport
          scrub: true,
          onLeave: () => {
            gsap.to(divRef.current, {
              y: imageContainerPosition - divRef.current.offsetHeight / 2,
              x: -leftOffset,
              duration: 1,
            });
          },
          onEnterBack: () => {
            gsap.to(divRef.current, {
              y: goalsPosition - divRef.current.offsetHeight / 2,
              x: 0, // Reset horizontal position
              duration: 1,
            });
          },
        },
      });
    }
  }, []);

  return (
    <div className="w-full h-full bg-[#060A22]">
      <div className="w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10 ">
        <h1 className="text-[3vw] font-medium text-[#FFFFFF]  font-Sora">
          <p className="pl-10">Transform your digital marketing</p>
          with awesome data-driven
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
            {" "}
            Generative AI
          </span>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center text-[3vw] font-medium font-Sora">
        <h1 className="text-[1vw] font-medium text-[#D7DEDA] -mt-14 font-Inter">
          <p>
            Say goodbye to fragmented, ineffective marketing. Transforming your
            agency into a Cutting-edge, AI-powered
          </p>
          <p className="pl-14">
            powerhouse. Experience a seamless, data-driven approach that drives
            Real results.
          </p>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center text-[3vw] font-medium font-inter gap-5 my-5">
        <button className="btn btn_primary">Request Demo</button>
        <button>
          <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center">
            <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
            <p className="text-[1.05vw] text-[#FFFFFF] font-Inter">
              Tech Partner
            </p>
          </div>
        </button>
      </div>
      <div
        className="relative"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Image src={HomePage} alt="" className="" />{" "}
      </div>
      <Image
        src={MainImage}
        alt="home"
        className="absolute top-[20vw]"
        ref={imageRef}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div
        ref={divRef}
        className="overflow-hidden absolute top-[49vw] left-[34vw] w-[32vw] h-[44vh]  z-50"
      >
        <Image src={Header} alt="" />
      </div>{" "}
      <div className="py-10" ref={goalsRef}>
        <Goals />
      </div>
      <div className="relative">
        <Image src={Strategy} alt="Background" className="w-full h-auto" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center text-[3vw] font-medium font-Sora absolute top-4">
            <h1 className="text-[3vw] font-medium font-Sora text-[#FFFFFF] pt-16">
              <p className="pl-10">Integrate the "3 S" AI in your </p>
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-32">
                digital marketing
              </span>
            </h1>
          </div>
        </div>

        <div className="w-[100%]  flex flex-row  px-10 absolute top-44">
          <div
            className="w-[45%] flex justify-center relative "
            ref={imageContainerRef}
          >
            <Image
              src={Marketing_first}
              alt="marketing1"
              className="w-full h-auto blend-screen"
            />
            <div className="absolute  flex justify-center items-center">
              <Image src={Video} alt="" className="w-[30vw] h-[55vh]" />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center  text-[white]">
            <h1 className="text-[2vw] font-semibold pb-5 font-Sora pl-20">
              Strategy AI
            </h1>
            <p className="w-[70%] pl-20 font-Inter font-medium">
              Develop smarter, data-driven strategies that adapt to market
              trends and customer behavior, ensuring your campaigns are always
              on target
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative flex flex-row">
        <Image src={Segmentation} alt="" />

        <div className="w-[100%] flex flex-row px-40 absolute top-10">
          <div className="w-[45%] flex flex-col justify-center text-[white]">
            <h1 className="text-[2vw] font-Sora font-bold px-20 pb-5">
              Segmentation AI
            </h1>
            <p className=" text-start pl-20 font-Inter font-semibold">
              Accurately segment your audience using AI to deliver personalized
              messages that resonate, driving higher engagement and conversion
              rates.
            </p>
          </div>
          <div className="w-[55%] flex justify-center">
            <Image
              src={SegmentAnimation}
              alt="marketing1"
              className="   blend-screen"
            />
          </div>
          <div className="  rounded-full">
            <Image
              src={Video1}
              alt=""
              className="absolute right-[17.3vw] top-[3vw]  w-[30vw] h-[55vh]"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-row">
        <Image src={Scale} alt="" />

        <div className="w-[100%] flex flex-row px-40 absolute top-10">
          <div className="w-[45%] flex justify-center"></div>
          <div className="w-[50%] flex flex-col justify-center text-[white]">
            <h1 className="text-[2vw] font-Sora font-bold px-20 pb-5">
              Scale Through Automation
            </h1>
            <p className="text-start font-Sora font-semibold pl-20">
              Effortlessly scale your marketing efforts with Automation,
              optimizing performance and expanding your reach without
              compromising quality or efficiency.
            </p>
          </div>
        </div>
      </div> */}
      {/* Slider Section */}
    </div>
  );
}
//  <DigitalMarketing />
//       <div className="py-10">
//         <BrandScroll />
//       </div>
//       <div className="flex flex-col items-center justify-center">
//         <div className="flex justify-center text-[3vw] font-medium font-Sora ">
//           <h1 className="text-[3vw] font-Sora font-medium text-[#FFFFFF] py-16">
//             <p className="pl-10 font-Sora">
//               The 3 S AI stabilizes your marketing goal{" "}
//             </p>{" "}
//             <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-36">
//               And increase performance all time.{" "}
//             </span>
//           </h1>
//         </div>

//         <div className="w-full flex flex-row gap-10 justify-center">
//           {MarketingGoalsList?.map((data) => (
//             <div className="w-[25%] h-[45vh] rounded-lg from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r ">
//               <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] mt-[10vw]">
//                 <p className="font-Sora font-semibold">{data?.content}</p>
//                 <span className=" font-Sora font-semibold">
//                   {data?.content1}
//                 </span>

//                 <p className="w-auto min-w-10 text-[0.95vw] px-10 py-5 flex justify-center  font-Sora items-center text-center font-medium ">
//                   {data?.details}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Growth */}
//       </div>
//       <Growth />
//     </div>
