"use client";

import { Button } from "@/components/ui/button";
import GooogleIcon from "../../public/google.svg";
import Image from "next/image";

export default function GoogleSigninButton() {
  return (
    <Button variant="outline" size="icon">
      <Image src={GooogleIcon} alt="Google Icon" className="w-6 h-6" />
    </Button>
  );
}
