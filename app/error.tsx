"use client";
import GeneralRedirector from "@/components/GeneralRedirector";

function error() {
  return (
    <GeneralRedirector
      href="/"
      redirectMsg="return to homepage"
      message="oops! , an error occured"
    />
  );
}

export default error;
