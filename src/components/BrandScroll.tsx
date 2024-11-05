"use client";

import Brand1 from "@icons/brand1.svg";
import Brand2 from "@icons/brand2.svg";
import Brand3 from "@icons/brand3.svg";
import Brand4 from "@icons/brand4.svg";
import Brand5 from "@icons/brand5.svg";
import Brand6 from "@icons/brand6.svg";
import Brand7 from "@icons/brand7.svg";
import Brand8 from "@icons/brand8.svg";
import Image from "next/image";

const BrandList = [
  {
    id: 1,
    image: Brand1,
  },

  {
    id: 2,
    image: Brand2,
  },
  {
    id: 3,
    image: Brand3,
  },
  {
    id: 4,
    image: Brand4,
  },
  {
    id: 5,
    image: Brand5,
  },
  {
    id: 6,
    image: Brand6,
  },
  {
    id: 7,
    image: Brand7,
  },
  {
    id: 8,
    image: Brand8,
  },
];
export default function BrandScroll() {
  return (
    <div className="relative overflow-hidden  mx-40">
      <div className="flex animate-marquee space-x-8">
        {[...BrandList, ...BrandList].map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={`Brand ${item.id}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
