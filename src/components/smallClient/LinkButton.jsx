"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const LinkButton = ({ children, className, onClick, route, variant }) => {
  return (
    <Link
      href={route || "/1"}
      className={cn(
        `rounded-sm hover:scale-105 transition-transform duration-300 `,
        className,
      )}
    >
      <Button variant={variant} onClick={onClick} className="">
        {children}
      </Button>
    </Link>
  );
};

export default LinkButton;
