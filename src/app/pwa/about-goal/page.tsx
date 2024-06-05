"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Checkbox from "@mui/material/Checkbox";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
interface CheckedItems {
  [key: string]: boolean;
}

const goals = [
  { label: "Job Opportunities", value: "Job Opportunities" },
  {
    label: "Paid Internships",
    value: "Paid Internships",
  },
  {
    label: "Self Assessment",
    value: "Self Assessment",
  },
  {
    label: "Freelancing Gigs",
    value: "Freelancing Gigs",
  },
  {
    label: "Career Specialization",
    value: "Career Specialization",
  },
  {
    label: "Networking Events",
    value: "Networking Events",
  },
  {
    label: "Scholarships",
    value: "Scholarships",
  },
];

const AboutGoalPage = () => {
  const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({});
  const router = useRouter();
  const handleCheckboxChange = (value: string) => {
    console.log("value:-", value);
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [value]: !prevCheckedItems[value],
    }));
  };

  const handleNext = () => {
    router.push("/pwa/about-your-self");
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex  justify-start items-center gap-4">
          <FaAngleLeft />
          <Progress value={33} className="h-2 w-full" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="font-bold">What’s your goal?</h1>
          <div className="w-full">
            {goals.map((goal) => (
              <div key={goal.value} className="mb-2 border-b-2 p-2">
                <label className="flex justify-between w-full ">
                  <span
                    className={`ml-2 ${
                      checkedItems[goal.value] ? "font-bold text-[#004455]" : ""
                    }`}
                  >
                    {goal.label}
                  </span>

                  <Checkbox
                    onChange={() => handleCheckboxChange(goal.value)}
                    icon={<FaPlusCircle className="text-gray-400 text-2xl" />}
                    checkedIcon={
                      <FaCheckCircle className="text-2xl text-[#004455]" />
                    }
                  />
                </label>
              </div>
            ))}
          </div>
        </div>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
};

export default AboutGoalPage;
