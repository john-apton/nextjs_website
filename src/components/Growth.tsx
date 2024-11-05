"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import Light from "@icons/Light Spheres.svg";
import SunLight from "@icons/Sun light11.svg";

export default function Growth() {
  const earthRef = useRef<HTMLImageElement | null>(null);
  const sunRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const sunAnimation = gsap.to(sunRef.current, {
      x: "-40%",
      y: "-40%",
      duration: 8,
      ease: "linear",
      repeat: -1,
    });

    const handleMouseEnter = () => {
      sunAnimation.play();
    };

    const handleMouseLeave = () => {
      sunAnimation.reverse();
    };

    if (earthRef.current) {
      earthRef.current.addEventListener("mouseenter", handleMouseEnter);
      earthRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      // if (earthRef.current) {
      //   earthRef.current.removeEventListener("mouseenter", handleMouseEnter);
      //   earthRef.current.removeEventListener("mouseleave", handleMouseLeave);
      // }
    };
  }, []);

  return (
    <div className=" w-full min-h-[45vh] py-10 bg-[#060A22] overflow-hidden ">
      <div className="relative">
        <Image
          // ref={earthRef}
          src={Light}
          alt="Earth"
          className="transition-transform duration-300  "
        />
        <div className="absolute top-[16vw] left-[24vw] text-[white] ">
          <div className="py-20 flex flex-col align-center items-center justify-center ">
            <div className=" font-Sora  align-center items-center justify-center xs:text-[3vw] md:text-[3vw] font-bold text-white">
              Accelerate Growth in
            </div>
            <p className=" font-Sora  xs:text-[3vw] md:text-[3vw] font-bold font-raleway from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              Every Way Possible with GainWix.ai{" "}
            </p>
            <p className="  font fond-semibold text-center w-[auto] max-w-[50vw] text-[#908EB5] mt-4">
              Leverage Gainwix.ai as your all-in-one platform to streamline your
              operations and keep your valuable data unified. Avoid the pitfalls
              of juggling multiple tools and harness the power of AI-driven
              insights to achieve your business objectives efficiently.
            </p>

            <div className="border border-[#2D3154] rounded-full min-w-[30vw] w-auto max-h-[10vh]  justify-between flex flex-row h-auto p-3 m-5 items-center">
              <div className="text-[#2D3154] font-Inter font-medium ">
                example@mail.com
              </div>
              <div className="btn btn_primary items-center ">
                <p className="mt-2 font-Inter font-medium">Book a Demo</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          ref={sunRef}
          src={SunLight}
          alt="Sun"
          className="absolute top-[14vw] left-[66vw] rotate-6 "
        />
      </div>
    </div>
  );
}
