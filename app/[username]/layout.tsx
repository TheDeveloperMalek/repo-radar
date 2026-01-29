import Header from "@/components/layout/header/Header";
import { GitHubService } from "@/services/github.service";
import { notFound } from "next/navigation";
import React from "react";

export default async function UsernameLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}>) {
  const { username } = await params;
  // const userExists = await GitHubService.getUserDetails(username);
  if (!username) notFound(); //HACKME make the condition based on the userexists
  return (
    <>
      <Header username={username} />
      <div className="container px-2 sm:px-0 sm:mx-auto pt-28">{children}</div>
    </>
  );
}
