"use client";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";

export default function CoolModeAnimate() {
  return (
    <div className="relative text-center pt-20">
      <h2 className="font-bold text-4xl text-center text-red-900 underline">
        Cool Mode
      </h2>
      <CoolMode
        options={{
          particle:
            "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
        }}
      >
        <Button className="mt-5">Click Me!</Button>
      </CoolMode>
    </div>
  );
}
