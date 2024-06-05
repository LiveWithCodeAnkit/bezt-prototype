"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { PiWarningCircleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Memory {
    label: string;
    value: string;
  }
  
  const semanticMemoryInfo: Memory[] = [
    { label: "Academic Recall", value: "Academic Recall" },
    { label: "Literature", value: "Literature" },
    { label: "Graphic Design", value: "Graphic Design" },
   
  ];

const SemanticMemoryPage = () => {
    const router = useRouter();
    const { toast } = useToast();
    const [selectedSemanticMemoryInfo, setSelectedSemanticMemoryInfo] = useState<string[]>([]);

    const handleLanguageClick = (value: string) => {
      if (selectedSemanticMemoryInfo.length < 3 || selectedSemanticMemoryInfo.includes(value)) {
        setSelectedSemanticMemoryInfo((prevSelectedLanguages) => {
          if (prevSelectedLanguages.includes(value)) {
            return prevSelectedLanguages.filter((lang) => lang !== value);
          } else {
            return [...prevSelectedLanguages, value];
          }
        });
      }else{
        toast({
            description:
              "Please select  any three",
            className: "bg-[#090A0A] text-white ",
          });
    }
    };

    const handleSemanticMemory=()=>{
        router.push("/pwa/speciality-skills")
      }

  return (
    <>
    <div className="flex flex-col gap-4">
        <div className="flex justify-start items-center gap-4">
          <FaAngleLeft />
          <Progress value={66} className="h-2 w-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-extrabold">Semantic Memory</h1> <label>Select any 3</label>
        </div>
        <div className="flex items-center justify-center flex-col gap-96 md:gap-5">
          <div className="grid grid-cols-2 gap-2 w-fit">
            {semanticMemoryInfo.map((language) => (
              <span
                key={language.value}
                className={`h-11 w-36 text-gray-800 text-xs rounded-2xl font-medium flex justify-between gap-10 items-center px-2.5 py-0.5 me-2 ${
                    selectedSemanticMemoryInfo.includes(language.value)
                    ? "bg-[#004455] text-white"
                    : "dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                }`}
                onClick={() => handleLanguageClick(language.value)}
              >
                {language.label}
                <PiWarningCircleFill
                className={`text-lg  ${
                    selectedSemanticMemoryInfo.includes(language.value)
                    ? "text-[#0EBE7F]"
                    : "text-gray-400"
                }`}
              />
              </span>
            ))}
          </div>

          <Button
          onClick={handleSemanticMemory}
          disabled={selectedSemanticMemoryInfo.length === 3 ? false : true}
          className="w-80"
        >
          Continue
        </Button>
        </div>
      
      </div>

    </>
  )
}

export default SemanticMemoryPage