"use client";
import Link from "next/link";
import classes from "./footer.module.css";
import { FaHeart } from "react-icons/fa";
import { DEVELOPERLINKS } from "@/config/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const year = new Date().getFullYear();
function Footer() {
  const pathname = usePathname();
  return (
    <footer
      className={clsx(
        classes.footer,
        pathname === "/" ? "fixed bottom-0" : "relative mt-16",
      )}
    >
      <p className={classes.author}>
        Made with
        <FaHeart />
        <Link target="_blank" href={DEVELOPERLINKS.linkedin}>
          by Muhammad Malek Alset
        </Link>
      </p>
      <p className={classes.copyright}>
        <Link target="_blank" href={DEVELOPERLINKS.projectSrouce}>
          RepoRadar
        </Link>{" "}
        &copy; {year} All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
