"use client";

import { PlanList } from "@constants/home";
import { Popover } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import DotIcon from "@icons/dot.svg";

interface ContactItem {
  id: number;
  value: string;
}

const PricingCalculator = () => {
  // const [Country, setCountry] = useState("");
  // const [visible, setVisible] = useState(false);
  const [planOpen, setPlanOpen] = useState<null | ContactItem>(null);
  const [open, setOpen] = useState(false);
  const [Initiated, setInitiated] = useState(0);
  const [marketingCount, setMarketingCount] = useState(0);
  const [utilityCount, setUtilityCount] = useState(0);
  const [result, setResult] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalConversationCost, setTotalConversationCost] = useState(0);

  // const handleVisibleClick = () => {
  //   setVisible(!visible);
  // };

  const handlePlanChange = () => {
    setOpen(!open);
  };

  const handleInputFirstChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarketingCount(Number(e.target.value));
  };
  const handleInputSecondChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUtilityCount(Number(e.target.value));
  };

  const handleInitiatedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitiated(Number(e.target.value));
  };

  // const ContactData = ({ setContactList }) => {
  //   const handleClick = (item: any) => {
  //     setCountry(item?.value);
  //     setVisible(false);
  //   };

  //   return (
  //     <div className="filter pointer overflow-auto listScroll">
  //       {setContactList?.map((item: any) => (
  //         <div
  //           className="flex-row w-100 align-center py-2 h-auto min-h-[5vh] overflow-scroll"
  //           key={item.id}
  //           onClick={() => handleClick(item)}
  //           style={{
  //             borderBottom: item?.id === 7 ? "none" : "1px solid #E8E8EA",
  //           }}
  //         >
  //           <p className="pl-2 py-2 rounded-lg category-content hover:bg-[#FBFBFB] text-[0.75vw] font-bold">
  //             {item.value}
  //           </p>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  useEffect(() => {
    const ConversationCount = result + total;
    setTotalConversationCost(ConversationCount);
  }, [result, total]);

  const colculateMarketingandUtilityConversation = () => {
    const marketing = marketingCount * 0.9;
    const utility = utilityCount * 0.5;
    setResult(marketing + utility);

    let InitiatedCountCost;
    if (Initiated <= 1000) {
      InitiatedCountCost = 0;
    } else {
      InitiatedCountCost = (Initiated - 1000) * 0.5;
    }
    setTotal(InitiatedCountCost);
  };

  const PlanData: React.FC<{ setContactList: ContactItem[] }> = ({
    setContactList,
  }) => {
    const handlePlanClick = (item: ContactItem) => {
      setPlanOpen(item);
      setOpen(false);
    };

    return (
      <div className="filter pointer overflow-auto listScroll">
        {setContactList?.map((item: ContactItem) => (
          <div
            className="flex-row w-100 align-center py-2 h-auto min-h-[5vh] overflow-scroll"
            key={item.id}
            onClick={() => handlePlanClick(item)}
            style={{
              borderBottom: item?.id === 3 ? "none" : "1px solid #E8E8EA",
            }}
          >
            <p className="pl-2 py-2 rounded-lg category-content hover:bg-[#FBFBFB] text-[0.75vw] font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <p className="py-10 text-[3vw] font-bold font-Inter text-[white]">
        Estimate
        <span className=" font-Inter pl-3 from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
          Your Conversation Usage Cost
        </span>
      </p>
      <div className=" bg-[#12152E] rounded-lg  mt-4 ">
        <div className="flex flex-col items-center">
          <div className="xs:[100vw] md:w-[60vw] md:h-[80vh] rounded-[26px] shadow-[0px_4px_16px_0px_#2D30360F] flex flex-col items-start justify-between px-5 py-5">
            <div className="w-[100%] flex flex-row justify-between">
              <Image src={DotIcon} alt="" />
              <p className="text-[1vw] font-semibold font-Inter text-[white]">
                Conversation Cost Calculator
              </p>
            </div>
            <div className="w-full h-full  mt-4 flex flex-row rounded-[26px]">
              <div className="w-[60%] p-5">
                <div className="flex flex-col">
                  <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter font-medium text-[white]">
                    Country
                  </p>
                  {/* <Popover
                placement="bottom"
                content={<ContactData setContactList={PriceCountryList} />}
                trigger="click"
                open={visible}
                onOpenChange={handleVisibleClick}
              > */}
                  <div className="flex flex-row justify-between pointer w-[25vw] px-3 py-2 mt-4 border border-[#2D3154] outline-none rounded-[8px]  cursor-pointer">
                    <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter font-medium text-[#3C416C]">
                      India
                    </p>
                    {/* <img
                      src={ICONS.BroadcastChevronDownIcon}
                      alt="Chevron"
                      className="w-[20px]"
                    /> */}
                  </div>
                  {/* </Popover> */}
                </div>
                <div className="flex flex-col mt-4">
                  <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter font-medium text-[white]">
                    Plan
                  </p>
                  <Popover
                    placement="bottom"
                    content={<PlanData setContactList={PlanList} />}
                    trigger="click"
                    open={open}
                    arrow={false}
                    onOpenChange={handlePlanChange}
                  >
                    <div className="flex flex-row justify-between pointer w-[25vw] px-3 py-2 mt-4 border border-[#2D3154] outline-none rounded-[8px]  cursor-pointer">
                      <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter  font-medium text-[white]">
                        {planOpen
                          ? (planOpen as { value: string })?.value
                          : "Select a plan"}
                      </p>
                      {/* <img
                        src={ICONS.BroadcastChevronDownIcon}
                        alt="Chevron"
                        className="w-[20px]"
                      /> */}
                    </div>
                  </Popover>
                  <div className="flex flex-col mt-4 ">
                    <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter  font-medium text-[white] mb-5 ">
                      No. of Marketing Messages
                    </p>
                    <div className="flex flex-row border w-[97%] rounded-[10px] border-[#2D3154] ">
                      <input
                        type="number"
                        className="w-[100%] h-[4.5vh] px-4  outline-none rounded-[10px] bg-[#12152E] border-[#2D3154] xs:text-[1.3vw] md:text-[0.75vw] font-semibold text-[white]"
                        value={marketingCount}
                        onChange={handleInputFirstChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <p className="xs:text-[1.3vw] md:text-[0.75vw]  font-Inter font-medium text-[white] mb-5  border-[#2D3154]">
                      No. of Utility Messages
                    </p>

                    <div className="flex flex-row border w-[97%] rounded-[10px] border-[#2D3154]">
                      <input
                        type="number"
                        className="w-[100%] h-[4.5vh] px-4  outline-none  rounded-[10px] xs:text-[1.3vw] md:text-[0.75vw] font-semibold text-[white] bg-[#12152E]  border-[#2D3154]"
                        value={utilityCount}
                        onChange={handleInputSecondChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 ">
                    <p className="xs:text-[1.3vw] md:text-[0.75vw] font-Inter font-medium text-[white] mb-5">
                      No. of User Initiated Messages
                    </p>
                    <div className="flex flex-row border w-[97%] rounded-[10px]  border-[#2D3154] bg-[#12152E]">
                      <input
                        type="number"
                        className="w-[100%] h-[4.5vh] px-4  outline-none  rounded-[10px] xs:text-[1.3vw] md:text-[0.75vw] font-semibold text-[white]  bg-[#12152E] border-[#2D3154]"
                        value={Initiated}
                        onChange={handleInitiatedChange}
                      />
                    </div>
                  </div>

                  <div
                    className="h-14 w-[100%] justify-center mt-10 flex items-center gap-5 "
                    onClick={colculateMarketingandUtilityConversation}
                  >
                    {/* <Button type="primary"> */}
                    <p className="btn btn_primary flex  items-center">
                      Calculate
                    </p>
                    {/* <div className="-rotate-90">
                        <ArrowDown color={"#fff"} />
                      </div>
                    </Button> */}
                  </div>
                </div>
              </div>
              <div className="w-[60%]">
                <div>
                  <p className="flex justify-center p-4 xs:text-[1.3vw] md:text-[1.3vw] font-Sora font-semibold text-[white]">
                    Platform Fee
                  </p>
                  <div className="flex flex-row px-14 py-3 justify-between align-center items-center border-b-2">
                    <p className="text-[white] text-[0.85vw] font-semibold">
                      {planOpen ? (planOpen as { value: string }).value : "***"}
                    </p>
                    <p className="text-[1.3vw] font-bold text-[white]">
                      {planOpen
                        ? (planOpen as unknown as { cost: string }).cost
                        : "*** "}
                    </p>
                  </div>
                  <p className="flex justify-center p-4 xs:text-[1.3vw] md:text-[1vw] font-Sora font-bold text-[#D4D4D4]">
                    Conversation fee
                  </p>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-row justify-between px-2">
                      <div className="flex flex-col">
                        <p className="xs:text-[1.3vw] md:text-[0.85vw] font-Inter font-black text-[#0ACD95]">
                          <p>Business Initiated Conversations:</p>
                        </p>
                        <span className="xs:text-[1.3vw] md:text-[0.75vw] font-medium text-[#898E99]">
                          <p>( Marketing + Utility )</p>
                        </span>
                      </div>
                      <p className=" w-[40%] h-[5vh] flex flex-row align-center items-center rounded-lg border border-[#E8E8EA]">
                        <span className="bg-[] w-[2.5vw] h-[5vh] rounded-sm flex justify-center align-center items-center text-white">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[1.3vw] md:text-[0.85vw] font-bold pl-2">
                          {result || 0}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row gap-5 justify-between px-2">
                      <div className="flex flex-col">
                        <p className="xs:text-[1.3vw] md:text-[0.85vw] font-Inter font-black text-[#0ACD95]">
                          <p>User Initiated Conversations:</p>
                        </p>
                        <span className="xs:text-[1.3vw] md:text-[0.75vw] font-medium text-[#898E99]">
                          <p>( Service conversations )</p>
                        </span>
                      </div>
                      <p className=" w-[40%] h-[5vh] flex flex-row align-center items-center rounded-lg border border-[#E8E8EA]">
                        <span className=" w-[2.5vw] h-[5vh] rounded-sm flex justify-center align-center items-center text-white">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[1.3vw] md:text-[0.85vw] font-bold pl-2">
                          {total}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-row  justify-between border-t px-2 ">
                      <div className="flex flex-col mt-10">
                        <p className="xs:text-[1.3vw] md:text-[0.85vw] font-Inter font-black text-[#0ACD95] ">
                          <p>Total Conversation Cost:</p>
                        </p>
                      </div>
                      <p className=" w-[40%] h-[5vh] flex flex-row align-center items-center rounded-lg border border-[#E8E8EA] mt-8">
                        <span className=" w-[2.5vw] h-[5vh] rounded-sm flex justify-center align-center items-center text-white">
                          ₹
                        </span>
                        <span className="text-[white] xs:text-[1.3vw] md:text-[0.85vw] font-bold pl-2">
                          {totalConversationCost}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
