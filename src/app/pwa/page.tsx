"use client";
import { useRouter } from "next/navigation";
import Splash from "./splash/page";

export default function Client() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/pwa/intro");
  }, 1500);

  return <Splash />;
}
