"use client";
import { usePathname } from "next/navigation";
import PillNav from "../PillNav";
import clsx from "clsx";
import { useEffect, useState } from "react";
import RepoRadarLogo from "@/app/favicon.ico";

function NavBar({ items }: { items: Array<{ label: string; href: string }> }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const hiddenCondition = current > lastScroll && current > 50;
      setHidden(hiddenCondition);
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);
  return (
    <div className="flex sm:justify-betwee md:justify-center">
      <PillNav
        logo={RepoRadarLogo}
        logoAlt="RepoRadar Logo"
        items={items}
        activeHref={pathname}
        className={clsx(
          "transition-transform duration-300 z-50",
          hidden ? "-translate-y-16" : "translate-y-0",
        )}
        ease="power2.easeOut"
        baseColor="#ffffff"
        pillColor="#000000"
        hoveredPillTextColor="#000000"
        pillTextColor="#ffffff"
        initialLoadAnimation={false}
      />
    </div>
  );
}

export default NavBar;
