import Image from "next/image";

export default function Splash() {
  return (
    <div className="bg-primary fixed top-0 left-0 right-0 bottom-0">
      <Image
        src="/images/bezt-logo-white.png"
        alt="bezt"
        // width={167}
        // height={60}
        width={121}
        height={44}
        className="transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
