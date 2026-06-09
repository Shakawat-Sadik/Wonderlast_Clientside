"use client";

import React from "react";
import { DistortedGlass } from "../../ui/distorted-glass";
import { cn } from "@/lib/utils";
import Link from "next/link";
import logo from "@/assets/Wanderlast.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import Loading from "../loading-ui/twin-orbit";
import { useRouter } from "next/navigation";
import { ActionButton } from "@/components/smallClient/LinkButton";

const Navbar = ({ className }) => {
  const { data: uSession, isPending } = authClient.useSession();
  console.log(uSession);

  const route = useRouter();

  const handleLogOut = async () => {
    const { data, error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          route.push("/auth/login"); // redirect to login page
        },
      },
    });

    data ? toast.success("Logged out successfully!", sonnerFunctionality) : toast.error("Failed to log out, please try again", sonnerFunctionality);

    console.log(`data: ${data}, error: ${error}`); // Log the response for debugging
  };
  return (
    <div
      className={cn(
        "sticky top-0 w-full z-90 bg-transparent overflow-hidden",
        className,
      )}
    >
      <div className="flex w-full items-center bg-chart-2/40 dark:bg-background/30 px-4 py-4 sm:px-6 sm:py-6 lg:px-10">
        <div className="z-20 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex w-full items-center justify-between md:w-auto md:justify-start md:gap-6">
            <Link href="/" className="text-3xl font-semibold">
              <Image src={logo} alt="Logo" width={120} height={80} />
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link
                href="/"
                className="text-xl text-accent-foreground font-semibold"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="text-xl text-accent-foreground font-semibold"
              >
                Destinations
              </Link>
              <Link
                href="/add-destination"
                className="text-xl text-accent-foreground font-semibold"
              >
                Add Destinations
              </Link>
              <Link
                href="/my-bookings"
                className="text-xl text-accent-foreground font-semibold"
              >
                My Bookings
              </Link>
            </nav>
          </div>

          {isPending ? (
            <div className="flex w-full items-center justify-center md:w-auto md:justify-center aspect-square rounded-full">
              <Loading className="size-1 text-primary" />
            </div>
          ) : uSession ? (
            <div className="flex w-full items-center justify-center md:w-auto md:justify-end">
              <nav className="hidden md:flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-xl text-chart-1 bg-primary/80 font-semibold size-10 p-2 border border-primary flex justify-center items-center rounded-full"
                >
                  {!uSession.user.image && uSession.user.name
                    ? uSession.user.name.slice(0, 2).toUpperCase()
                    : "U"}
                </Link>
                <ActionButton
                  onClickFunc={handleLogOut}
                  className="text-xl text-accent-foreground font-semibold"
                >
                  Log Out
                </ActionButton>
              </nav>
            </div>
          ) : (
            <div className="flex w-full items-center justify-center md:w-auto md:justify-end">
              <nav className="hidden md:flex space-x-4">
                <Link
                  href="/auth/login"
                  className="text-xl text-accent-foreground font-semibold"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/signup"
                  className="text-xl text-accent-foreground font-semibold"
                >
                  Sign Up
                </Link>
              </nav>
            </div>
          )}
          <nav className="flex flex-wrap justify-center gap-4 text-sm md:hidden">
            <Link
              href="/"
              className="text-xl text-accent-foreground font-semibold"
            >
              Home
            </Link>
            <Link
              href="/destinations"
              className="text-xl text-accent-foreground font-semibold"
            >
              Destinations
            </Link>
            <Link
              href="/my-bookings"
              className="text-xl text-accent-foreground font-semibold"
            >
              My Bookings
            </Link>
          </nav>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 right-0 -mt-px h-full">
        <DistortedGlass className="h-full" />
      </div>
    </div>
  );
};

export default Navbar;
