"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye } from "lucide-react";
import { EyeClosed } from "lucide-react";
import Loading from "../loading-ui/twin-orbit";
import { eliteDateFormat } from "@/lib/providers";
import { toast } from "sonner";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { Trash } from "lucide-react";
import { sonnerFunctionality } from "@/lib/toastFunction";

const GoogleIcon = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z" />
  </svg>
);

export default function Login() {
  const { data: uSession, isPending} = authClient.useSession();
  const route = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePassView = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGoLogin = async (e) => {
    const {data, error} = authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setIsLoading(true);
          //   div.absolute.bg-background
        },
        onSuccess: () => {
          setIsLoading(false);
          console.log("Session data:", uSession); // Log the session data for debugging
          route?.back()
          // router.push("/");
        },
        onError: (ctx) => {
          setIsLoading(false);
          toast.error(`Failed to login, please try again (Issue: ${ctx.error.message})`, sonnerFunctionality())
        },
      },
    );

    console.log( `data: ${data}, error: ${error}` );
  }

  const handleForm = async (e) => {
    const { data: uSession, isPending} = authClient.useSession();
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        rememberMe: true,
      },
      {
        onRequest: (ctx) => {
          setIsLoading(true); // Set loading state to true when the request starts
          <Loading />; //show loading
        },
        onSuccess: (ctx) => {
          setIsLoading(false); // Set loading state to false when the request is successful
          //redirect to the dashboard or sign in page
          toast.success("Logged in successfully!", sonnerFunctionality());
          console.log("Session data:", uSession); // Log the session data for debugging
          route.back() || route.push("/");
        },
        onError: (ctx) => {
          setIsLoading(false); // Set loading state to false when the request fails
          // display the error message
          toast.error(`Failed to login, please try again (Issue: ${ctx.error.message})`, sonnerFunctionality())
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center">
      {isLoading && (
        <div className="bg-primary/50 size-full fixed top-0 left-0 flex items-center justify-center z-50">
          <Loading className="" />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-balance text-center text-xl font-semibold text-foreground">
            Log in or create account
          </h2>
          <form onSubmit={handleForm} method="post" className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="ephraim@blocks.so"
                className="mt-2"
              />
            </div>
            <div className="relative">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Password
              </Label>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="password"
                placeholder="Password"
                className="mt-2"
                required
              />
              <div
                onClick={handlePassView}
                className="absolute inset-y-0 top-6.5 right-4 flex items-center cursor-pointer transform-content transform-gpu transition-all duration-200 opacity-50 hover:opacity-100"
              >
                {!showPassword ? (
                  <EyeClosed size={16} className="text-primary" />
                ) : (
                  <Eye size={16} className="text-primary" />
                )}
              </div>
            </div>
            <Button type="submit" className="mt-4 w-full py-2 font-medium">
              Sign in
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or with
              </span>
            </div>
          </div>

          <Button
            onClick={handleGoLogin}
            variant="outline"
            className="flex w-full items-center justify-center space-x-2 py-2"
          >
              <GoogleIcon className="size-5" aria-hidden={true} />
              <span className="text-sm font-medium">Sign in with Google</span>
          </Button>

          <p className="text-pretty mt-4 text-xs text-muted-foreground dark:text-muted-foreground">
            By signing in, you agree to our{" "}
            <a href="#" className="underline underline-offset-4">
              terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline underline-offset-4">
              privacy policy
            </a>
            .
          </p>

          <Button onClick={() => toast.success("This is a success message!", sonnerFunctionality())}>Sonner</Button>
        </div>
      </div>
    </div>
  );
}
