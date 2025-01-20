"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/derived/grid-pattern";
import { ContainerScroll } from "./container-scroll-animation";
import Image from "next/image";

function HeroHeader() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <GridPatternLinearGradient>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                The Unified Digital Platform <br />
                <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-primary">
                  For Sellers and Buyers
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/demo-main-page.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </GridPatternLinearGradient>
    </div>
  );
}

function GridPatternLinearGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      {children}
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}

export default HeroHeader;
