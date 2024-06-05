import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TabletSmartphone, ShieldEllipsis } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/images/bezt-logo-dark.png"
        alt="bezt"
        width={121}
        height={44}
        className="my-8"
      />
      <Button asChild className="mt-10">
        <Link href="/pwa">
          <TabletSmartphone className="mr-2" /> PWA
        </Link>
      </Button>
      <Button asChild className="mt-8">
        <Link href="/admin">
          <ShieldEllipsis className="mr-2" /> Admin Panel
        </Link>
      </Button>
    </div>
  );
}
