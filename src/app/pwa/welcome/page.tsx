"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
const topics = [
  { label: "Lingual Proficiency", value: "Lingual Proficiency" },
  {
    label: "Semantic Memory ",
    value: "Semantic Memory ",
  },
  {
    label: "Speciality Skills",
    value: "Speciality Skills",
  },
];
export default function Welcome() {
  const router = useRouter();

  const handleStartDay=()=>{
    router.push("/pwa/proficiency")
  }
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center  w-1/2">
          <FaAngleLeft />
          <h1 className="font-bold text-[#090A0A]">Day 1</h1>
        </div>
        <div className="text-lg font-bold">
          <h1>Welcome, Aron Raj !</h1>
        </div>
        <div className="flex flex-col gap-2 w-full bg-[#C6DCE2] p-5 rounded-lg">
          <h1 className="font-bold text-lg">
            Challenge a variety of questions by selecting topics from:
          </h1>
          <div className="w-full">
            {topics.map((goal) => (
              <div key={goal.value} className="mb-2 border-b-2 p-1">
                <label className="flex justify-start items-center w-full ">
                  <Checkbox
                    icon={<FaPlusCircle className="text-gray-400 text-xl" />}
                    checkedIcon={
                      <FaCheckCircle className="text-xl text-[#004455]" />
                    }
                  />
                  <span className="ml-2 font-bold text-[#004455]">
                    {goal.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={handleStartDay}>Start Day 1</Button>
      </div>
    </>
  );
}
