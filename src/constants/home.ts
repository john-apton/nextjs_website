import Vector1 from '@icons/Vector1.svg'
import Vector2 from "@icons/Chart.svg"
import vector3 from "@icons/vector3.svg"
import Vector4 from "@icons/vector4.svg"
import Vector5 from "@icons/vector5.svg"
import Vector6 from "@icons/Vector6.svg"

import GreenStar from "@icons/GreenStar1.svg"
import GrayStar from "@icons/GrayStar.svg"
import GreenTick from "@icons/GreenTick.svg"
import GrayTick from "@icons/GrayTick.svg"



export const PricingCardList = [
  {
    id: 1,
    icon: Vector1,
    content: "Unified Inbox",
  },
  {
    id: 2,
    icon: Vector2,
    content: "Conversational Insights",
  },
  {
    id: 3,
    icon: vector3,
    content: "WhatsApp Broadcasts",
  },
  {
    id: 4,
    icon: Vector4,
    content: "Contacts Management",
  },
  {
    id: 5,
    icon: Vector5,
    content: "Customer Journey",
  },
  {
    id: 6,
    icon: Vector6,
    content: "API Solutions",
  },
];


export const pricing = [
    {
        id: 1,
        title: "Starter",
        custom: false,
        popular: false,
        // icon: images?.Starter,
        monthly: {
            price: "3,000",
            verification: "Business Verification",
            tick:  GreenStar,
            tick1: GrayStar,
            tick2: GreenTick,
            tick3:GrayTick,
        },
        // quarterly: {
        //     price: "9,000",
        //     verification: "Business Verification",
        //     tick:  GreenStar,
        //     tick1: GrayStar,
        //     tick2: GreenTick,
        //     tick3:GrayTick,
           
        // },
        yearly: {
            price: "30,000",
            verification: "Business Verification",
           tick:  GreenStar,
            tick1: GrayStar,
            tick2: GreenTick,
            tick3:GrayTick,
        },
        content: "For startups and solopreneurs looking to build a business acrossdigital platforms",
        btnText: "Get Started",
    },
  {
    id: 2,
    title: "Growth",
    custom: false,
    popular: true,
    // icon: images?.Growth,
    monthly: {
      price: "5,000",
        verification: "Business Verification",
        tick: GreenStar,
       tick1:GreenStar,
    tick2: GreenTick,
    tick3: GreenTick,
    },
    // quarterly: {
    //   price: "15,000",
    //     verification: "Business Verification",
    //    tick:  GreenStar,
    //     tick1: GreenTick,
    //  tick2: GreenTick,
    // tick3: GreenTick,
      
    // },
    yearly: {
      price: "50,000",
      verification: "Business Verification",
     tick:  GreenStar,
        tick1: GreenStar,
     tick2: GreenTick,
    tick3: GreenTick,
    },
    content: "For small to mid-scale businesses looking to expand their business growth",
    
    btnText: "Get Started",
  },
  {
    id: 3,
    title: "Magnum",
    custom: true,
    popular: false,
    // icon: images?.Magnum,
    monthly: {
      price: "2,500",
      verification: "Business Verification",
      tick: GreenStar,
       tick1:GreenStar,
    tick2: GreenTick,
    tick3: GreenTick,
    },
    // quarterly: {
    //   price: "2,500",
    //   verification: "Business Verification",
    //  tick:  GreenStar,
    //     tick1: GreenTick,
    //  tick2: GreenTick,
    // tick3: GreenTick,
    // },
    yearly: {
      price: "25,000",
      verification: "Business Verification",
     tick:  GreenStar,
        tick1: GreenStar,
     tick2: GreenTick,
    tick3: GreenTick,
    },
    content: "For enterprise businesses looking for a fully featured customizable business suite",
      btnText: "Contact Sales",
  },
];

export const MonthList = [
  {
    id: 1,
    name: "Starter",
    value: "₹1000",
    text: " / Month",
  },
  {
    id: 2,
    name: "Growth",
    value: "₹2,500",
    text: " / Month",
  },
  {
    id: 3,
    name: "Magnum",
    value: "Custom",
  },
];

export const AnnualList = [
  {
    id: 1,
    name: "Starter",
    value: "₹10,000",
    text: " / Yearly",
  },
  {
    id: 2,
    name: "Growth",
    value: "₹25,000",
    text: " / Yearly",
  },
  {
    id: 3,
    name: "Magnum",
    value: "Custom",
  },
];

export const CampaignList = [
  {
    id: 1,
    title: "campaigns",
        color: "white",
    border:"#6940F2",
    // icon: ICONS?.CampaignIcon,
    subtitle: [
      {
        id: 1,
        name: "Broadcast Campaigns",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: "Segmented WhatsApp Broadcast",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: "WhatsApp Send Now",
       icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: "WhatsApp Send Later",
       icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: "Campaign Analytics",
       icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: "Sequence Campaigns ",
      icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
      {
        id: 7,
        name: "Trigger Campaigns",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
    ],
  },
  {
    id: 2,
    title: "Team Management",
      color: "#F9AD68",
    border:"#F9AD68",
    subtitle: [
      {
        id: 1,
        name: "Team Management",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: "No. of Users",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: "Additional Users",
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
    ],
  },
  {
    id: 3,
    title: "Unified Inbox",
      color: "#0ACD95",
    border:"#0ACD95",
    subtitle: [
      {
        id: 1,
        name: "WhatsApp Inbox",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 2,
        name: "Inbox Template Messages",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: "Chat History",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
        lifeTime: "last 30 days",
        lifeTime1: "last 6 Months ",
        lifeTime2: "Life Time",
      },
        {
            id: 4,
            name: "Team Inbox",
            icon: GrayTick,
            icon2: GreenTick,
            icon3: GreenTick,
        },
      {
        id: 5,
        name: "Assign Users",
         icon: GrayTick,
            icon2: GreenTick,
            icon3: GreenTick,
      },
      {
        id: 6,
        name: "Quick Replies",
        icon: GrayTick,
            icon2: GreenTick,
            icon3: GreenTick,
        content: "Upcoming",
      },
    ],
  },
  {
    id: 4,
    title: "CRM",
      color: "#E014F2",
    border:'#E014F2',
    subtitle: [
      {
        id: 1,
            name: "Contact Management ",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
       
      },
      {
        id: 2,
        name: "Bulk Import",
        icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
        limit: "(Up to 10000)",
        limit1: "(Up to 25000)",
        limit2: "(Up to 100000)",
      },
      {
        id: 3,
        name: "Bulk Export",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: "Contact Details & Profile Building",
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: "Customer Journey",
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: "Conversation Insights ",
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
      {
        id: 7,
        name: "Tags",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
      {
        id: 8,
        name: "Audience Groups",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
      {
        id: 9,
        name: "Assign Contacts to Team Members",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
      {
        id: 10,
        name: "Advanced Filters",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
    ],
  },
  {
    id: 5,
    title: "Support",
    title2:" Monday-Saturday, 10:00 AM - 6:00 PM IST",
      color: "#3663FA",
        border:"#3663FA",

    subtitle: [
      {
        id: 1,
        name: "Email Support",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
        {
            id: 2,
            name: "Chat Support",
            icon: GrayTick,
            icon2: GreenTick,
            icon3: GreenTick,
        },
      {
        id: 3,
        name: "On-Call Support",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 4,
        name: "24/7 Support",
        icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 5,
        name: "Live Onboarding Support",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 6,
        name: "Dedicated Account Manager",
        icon: GrayTick,
        icon2: GrayTick,
        icon3: GreenTick,
        content: "Upcoming",
      },
    ],
  },
  {
    id: 6,
    title: "API & Webhooks",
      color: "#5EC953",
    border:"#5EC953",
    // icon: ICONS?.APIIcon,
    subtitle: [
      {
        id: 1,
            name: "API Capabilities",
         icon: GreenTick,
        icon2: GreenTick,
        icon3: GreenTick,
        
      },
      {
        id: 2,
        name: "Webhooks",
         icon: GrayTick,
        icon2: GreenTick,
        icon3: GreenTick,
      },
      {
        id: 3,
        name: "Messages speed",
        speed: "100 messages / sec",
        speed1: "300 messages / sec",
        speed3: "1000 messages / sec",
      },
    ],
  },
];
export const ConversationFeeList = [
  {
    id: 1,
    title: "Business Initiated Conversations:",
    content: "( Marketing + Utility )",
  },
  {
    id: 2,
    title: "User Initated Conversations:",
    content: "( Service conversations )",
  },
  {
    id: 3,
    title: "Total Conversation Cost:",
  },
];

export const PlanList = [
  {
    id: 1,
    value: "Stater",
    cost:'1000'
  },
  {
    id: 2,
    value: "Growth",
    cost:'2,500'
  },
  {
    id: 3,
    value: "Magnum",
    cost:'CUSTOM'
  },
];