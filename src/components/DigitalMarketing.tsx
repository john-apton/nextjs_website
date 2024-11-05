"use client";

import Image from "next/image";
import Image1 from "@icons/image1.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function DigitalMarketing() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="bg-[#060A22]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center text-[3vw] ">
          <h1 className="text-[3vw] font-Sora font-medium text-[#FFFFFF] py-16 text-center">
            <p className="pl-10">Hear What our AI powered digital agencies </p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent ">
              say about Gainwix.ai{" "}
            </span>
          </h1>
        </div>
      </div>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r ">
            <div className="p-10 w-[100%] flex fle-row  justify-center">
              <div className="w-[50%] flex flex-col justify-center ">
                <p className="text-[0.95vw] font-Inter font-medium flex justify-center items-center">
                  Aptonworks (Digital Solutions Provider):- One of the most
                  impactful decisions we've made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="text-[3vw] mt-5 font-Inter font-medium">
                  Christo
                </span>
                <p className="text-[0.85vw] font-Inter font-normal">
                  Managing Director
                </p>
              </div>
              <div className="w-[50%]">
                <Image src={Image1} alt="banner" />
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide1">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r ">
            <div className="p-10 w-[100%] flex fle-row  justify-center">
              <div className="w-[50%] flex flex-col justify-center ">
                <p className="text-[0.95vw] font-Inter font-medium flex justify-center items-center">
                  Aptonworks (Digital Solutions Provider):- One of the most
                  impactful decisions we've made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="text-[3vw] mt-5 font-Inter font-medium">
                  Christo
                </span>
                <p className="text-[0.85vw] font-Inter font-normal">
                  Managing Director
                </p>
              </div>
              <div className="w-[50%]">
                <Image src={Image1} alt="banner" />
              </div>
            </div>
          </div>
        </div>

        <div className="keen-slider__slide number-slide1">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r ">
            <div className="p-10 w-[100%] flex fle-row  justify-center">
              <div className="w-[50%] flex flex-col justify-center ">
                <p className="text-[0.95vw] font-Inter font-medium flex justify-center items-center">
                  Aptonworks (Digital Solutions Provider):- One of the most
                  impactful decisions we've made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="text-[3vw] mt-5 font-Inter font-medium">
                  Christo
                </span>
                <p className="text-[0.85vw] font-Inter font-normal">
                  Managing Director
                </p>
              </div>
              <div className="w-[50%]">
                <Image src={Image1} alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
