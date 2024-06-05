"use client";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import { PiWarningCircleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";

interface Language {
  label: string;
  value: string;
}

const languageLevels: Language[] = [
  { label: "English L1", value: "English L1" },
  { label: "English L2", value: "English L2" },
  { label: "English L3", value: "English L3" },
  { label: "Hindi L1", value: " Hindi L1" },
  { label: "Hindi L2", value: "Hindi L2" },
  { label: "Hindi L3", value: "Hindi L3" },
  { label: "Bengali", value: "Bengali" },
  { label: "Marathi", value: "Marathi" },
  { label: "Tamil", value: "Tamil" },
];

const LingualProficiencyPage: React.FC = () => {
  const router = useRouter();

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageClick = (value: string) => {
    if (selectedLanguages.length < 3 || selectedLanguages.includes(value)) {
      setSelectedLanguages((prevSelectedLanguages) => {
        if (prevSelectedLanguages.includes(value)) {
          return prevSelectedLanguages.filter((lang) => lang !== value);
        } else {
          return [...prevSelectedLanguages, value];
        }
      });
    }
  };

  const handleProficiency = () => {
    router.push("/pwa/semantic-memory");
  };
  return (
    <>
      <div className="flex flex-col gap-4 ">
        <div className="flex justify-start items-center gap-4">
          <FaAngleLeft />
          <Progress value={33} className="h-2 w-full" />
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="font-extrabold">Lingual Proficiency</h1>{" "}
          <label>Select any 3</label>
        </div>
        <div className="flex items-center justify-center flex-col gap-52 md:gap-5">
          <div className="grid grid-cols-2 gap-2 w-fit">
            {languageLevels.map((language) => (
              <span
                key={language.value}
                className={`h-11 w-36 text-gray-800 text-xs rounded-2xl font-medium flex justify-between gap-10 items-center px-2.5 py-0.5 me-2 ${
                  selectedLanguages.includes(language.value)
                    ? "bg-[#004455] text-white"
                    : "dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
                }`}
                onClick={() => handleLanguageClick(language.value)}
              >
                {language.label}
                <PiWarningCircleFill
                  className={`text-lg  ${
                    selectedLanguages.includes(language.value)
                      ? "text-[#0EBE7F]"
                      : "text-gray-400"
                  }`}
                />
              </span>
            ))}
          </div>
          <Button
            onClick={handleProficiency}
            disabled={selectedLanguages.length === 3 ? false : true}
            className="w-80"
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default LingualProficiencyPage;
