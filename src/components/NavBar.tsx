import Image from "next/image";

import FullLogo from "@logos/full-logo.svg";
import { cn } from "@helpers/cn";
import Link from "next/link";

export default function NavBar() {
  const navLink = "text-base font-medium";
  return (
    <nav className="w-full h-20 bg-[#060A22] px-[5vw]">
      <div className="w-full h-full  max-w-screen-2xl flex items-center justify-between mx-auto">
        <Link href={"/"} className=" pointer">
          <Image src={FullLogo} alt="GainWix Full Logo" />
        </Link>
        <div className="flex items-center gap-10 text-[#908EB5]">
          <div className={cn(navLink, "")}>Product</div>
          <div className={cn(navLink, "")}>Industries</div>
          <Link href={"/pricing"} className={cn(navLink, "")}>
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn secondary">Login</button>
          <button className="btn btn_primary">Request Demo</button>
        </div>
      </div>
    </nav>
  );
}
