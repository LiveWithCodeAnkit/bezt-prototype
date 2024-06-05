"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const introContent = [
  {
    heading: "ASSESS",
    content:
      " Lorem ipsum dolor sit amet consectetur adipiscing elit. In rhoncus    enim sed lorem laoreet",
  },
  {
    heading: "ALIGN",
    content:
      " Lorem ipsum dolor sit amet consectetur adipiscing elit. In rhoncus    enim sed lorem laoreet",
  },
  {
    heading: "ACHIEVE",
    content:
      " Lorem ipsum dolor sit amet consectetur adipiscing elit. In rhoncus    enim sed lorem laoreet",
  },
];
const IntroPage = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const handleNext = () => {
    if (step < 2) {
      setStep((prevStep) => prevStep + 1);
    }
    if (step === 2) {
      router.push("/pwa/login");
    }
  };

  return (
    <>
      <Image
        src="/images/bezt-logo-small.png"
        alt="bezt"
        width={50}
        height={50}
        className="mb-8"
      />
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="bg-slate-500 h-40 w-40 rounded-full"></div>

        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold">{introContent[step].heading}</h1>
          <p className="w-[14rem]">{introContent[step].content}</p>
        </div>
        <div className="flex items-center space-x-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`h-3 w-3 ${
                index === step ? "bg-[#37C8AB]" : "bg-gray-500"
              } rounded-full`}
            ></div>
          ))}
        </div>
        <Button className="w-full" onClick={handleNext}>
          {step === 2 ? "Get Started" : "Next"}
        </Button>
      </div>
    </>
  );
};

export default IntroPage;
