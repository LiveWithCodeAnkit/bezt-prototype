"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const resourcesList = [
  { label: "Family / Friends", value: "Personal Recommendations" },
  { label: "Search Engine", value: "Online Search" },
  { label: "LinkedIn / Twitter", value: "Social Media Platforms" },
  { label: "Colleagues or Coworkers", value: "Workplace Connections" },
  { label: "Word of Mouth", value: "Informal Communication" },
  { label: "TV Commercials", value: "Television Advertisements" },
  { label: "Events or Conferences", value: "Professional Gatherings" },
];

const AboutUsPage = () => {
  const router = useRouter();

  const handleAboutUs=()=>{
    router.push("/pwa/welcome")
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex  justify-start items-center gap-4">
          <FaAngleLeft />
          <Progress value={100} className="h-2 w-full" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold">How did you hear about us?</h1>
          <div className="flex flex-col gap-2 w-full p-3">
            <RadioGroup defaultValue={resourcesList[0].value}>
              {resourcesList.map((source) => (
                <div
                  key={source.value}
                  className="flex items-center space-x-2 border-b-2 p-2"
                >
                  <RadioGroupItem
                    value={source.value}
                    id={`r_${source.value}`}
                  />
                  <label htmlFor={`r_${source.value}`}>{source.label}</label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
        <Button onClick={handleAboutUs}>Continue</Button>
      </div>
    </>
  );
};

export default AboutUsPage;
