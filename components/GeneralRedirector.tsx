"use client";

import { Button } from "@/components/ui/Button/button";
import Link from "next/link";

function GeneralRedirector({
  message,
  redirectMsg,
  href,
}: {
  message: string;
  redirectMsg: string;
  href: string;
}) {
  return (
    <div className="h-[calc(100vh-150px)] flex flex-col gap-3 justify-center items-center">
      <h1 className="capitalize text-4xl">{message}</h1>
      <Link href={`${href}`}>
        <Button className="hover:opacity-85 capitalize">{redirectMsg}</Button>
      </Link>
    </div>
  );
}

export default GeneralRedirector;
