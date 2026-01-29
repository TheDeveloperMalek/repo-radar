"use client";
import { Input } from "@/components/ui/Input/input";
import classes from "./home.module.css";
import { Button } from "@/components/ui/Button/button";
import { FaSearch } from "react-icons/fa";
import FloatingLines from "@/components/FloatingLines";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { GitHubService } from "@/services/github.service";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/config/constants";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import RepoRadarLogo from "@/app/favicon.ico";

export default function Home() {
  const [searching, setSearching] = useState<boolean>(false);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleClick = async () => {
    try {
      setSearching(true);
      const usernameValue = usernameInputRef.current?.value;
      if (!usernameValue) {
        toast.error("Please enter GitHub username");
        return;
      }
      const usernameWithoutSpaces = usernameValue.replaceAll(" ", "");
      const userExists = await GitHubService.getUserDetails(
        usernameWithoutSpaces,
      );
      if (!userExists) {
        toast.error("The Github username does not exists");
        return;
      }
      toast.success("GitHub user found. Loading profile …");
      router.push(`/${usernameWithoutSpaces}/${ROUTES.dashboard}`);
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong while verifying the username.");
    } finally {
      setSearching(false);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.float}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            linesGradient={["30c5d2", "471069"]}
            lineCount={7}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>
        <Image width={50} height={50} src={RepoRadarLogo} alt="Logo" />
        <div className={classes.title}>
          <SplitText
            text="RepoRadar"
            className={classes["app-name"]}
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
          />
          <h3>Clean, Modern Reporting for GitHub User Activity</h3>
        </div>
        <div className={classes["username-input"]}>
          <Input
            placeholder="Enter GitHub Username"
            name="username"
            ref={usernameInputRef}
          />
          <Button onClick={handleClick} disabled={searching}>
            {!searching ? <FaSearch /> : <Spinner />}
          </Button>
        </div>
      </div>
    </>
  );
}
