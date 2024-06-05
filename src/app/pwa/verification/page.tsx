"use client";
import Link from "next/link";
import Image from "next/image";
import OtpInput from "react-otp-input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const VerificationPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const [timer, setTimer] = useState(30);
  const [resendEnabled, setResendEnabled] = useState(false);
  const handleChange = (code: any) => setCode(code);

  useEffect(() => {
    let interval: any;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);
  const handleResend = () => {
    setTimer(30);
    setResendEnabled(false);
  };

  const handleVerify = () => {
    router.push("/pwa/about-goal");
  }
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
        <div>
          <h1>Verify your mobile number</h1>
          <span>A 4 digit code has been sent to:</span>
        </div>
        <div className="flex gap-3">
          <label className="font-bold">+918123456789</label>
          <Link href={"/pwa/login"} className="text-[#37C8AB] font-semibold">
            Change
          </Link>
        </div>
        <div>
          <label>Enter the verification code here</label>
          <OtpInput
            value={code}
            onChange={handleChange}
            numInputs={4}
            separator={<span style={{ width: "8px" }}></span>}
            isInputNum={true}
            shouldAutoFocus={true}
            inputStyle={{
              border: "1px solid gray",
              borderRadius: "8px",
              width: "54px",
              height: "54px",
              fontSize: "18px",
              color: "#000",
              fontWeight: "400",
              caretColor: "blue",
            }}
            focusStyle={{
              border: "1px solid #37C8AB",
              outline: "none",
            }}
          />
        </div>
        <div className="flex gap-1 justify-start items-center">
          <label>{`Didn’t get the code? Resend in 00:${
            timer < 10 ? `0${timer}` : timer
          }`}</label>

          <Button
            variant="ghost"
            className="text-[#37C8AB] font-semibold p-0"
            disabled={!resendEnabled}
            onCanPlay={handleResend}
          >
            Resend
          </Button>
        </div>

        <Button type="button" className="w-full" onClick={handleVerify}>
          Verify
        </Button>
      </div>
    </>
  );
};

export default VerificationPage;
