"use client"

import { cn } from "@/lib/utils"

export const DistortedGlass = ({
  className
}) => {
  return (
    <>
      <div
        className={cn(
          "relative hidden h-12.5 w-90 overflow-hidden lg:w-150 xl:block xl:w-full",
          className
        )}>
        <div
          className="pointer-events-none absolute bottom-0 z-10 size-full overflow-hidden rounded-b-2xl">
          <div className="glass-effect size-full"></div>
        </div>
        <svg>
          <defs>
            <filter id="fractal-noise-glass">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.16 0.16"
                numOctaves="1"
                result="warp"></feTurbulence>
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale="90"
                in="SourceGraphic"
                in2="warp" />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
}
