"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const SignUpPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [isValidPhone, setIsValidPhone] = useState(false);

  const handlePhoneChange = (phoneNumber: string) => {
    setPhone(phoneNumber);

    const phoneRegex = /^[0-9]{8,}$/;
    setIsValidPhone(phoneRegex.test(phoneNumber));
  };

  const handleGetCode = () => {
    if (phone.startsWith("91") && isValidPhone) {
      router.push("/pwa/verification");
    } else {
      console.log("i am console of  else part");

      toast({
        description:
          "Sorry, we are not yet available in this country. We will be available as soon as possible",
        className: "bg-[#090A0A] text-white ",
      });
    }
  };
  const handleKeyPress = (event:any) => {
    if (event.key === "Enter") {
      handleGetCode();
    }
  };

  return (
    <>
      <div className="flex flex-col justify-start gap-4">
        <Image
          src="/images/bezt-logo-small.png"
          alt="bezt"
          width={50}
          height={50}
          className="mb-8"
        />
        <div className="flex flex-col justify-start items-start font-semibold">
          <span>To meet opportunities,</span>
          <span>please verify your mobile number</span>
        </div>
        <div className="flex flex-col justify-start items-start gap-8">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={handlePhoneChange}
          />

          <Button
            type="button"
            className="w-full"
            onClick={handleGetCode}
            onKeyDown={handleKeyPress} 
            disabled={!phone || !isValidPhone}
          >
            Get Code
          </Button>
        </div>
        <p className="mt-2 mx-2 text-center text-sm text-gray-500">
          By continuing, you confirm that you have read and understood the&nbsp;
          <u>Terms of Use </u>&nbsp;and&nbsp;<u>Privacy Policy</u>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
