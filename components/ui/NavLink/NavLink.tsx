"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classes from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const appliedClasses = isActive
    ? `${classes.link} ${classes.active}`
    : `${classes.link}`;

  return (
    <Link href={href} className={appliedClasses}>
      {children}
    </Link>
  );
};

export default NavLink;
