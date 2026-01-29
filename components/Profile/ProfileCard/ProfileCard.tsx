import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  FaBuilding,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import classes from "./profileCard.module.css";
import { IconType } from "react-icons";
import CountUp from "@/components/CountUp";

const socialKeys = ["github", "linkedin", "twitter", "website"] as const;
type SocialKey = (typeof socialKeys)[number];
export interface ProfileCardProps {
  username: string;
  avatar_url: string;
  bio: string;
  location?: string;
  followers: number;
  following: number;
  public_repos: number;
  company?: string;
  social?: Partial<Record<SocialKey, string>>;
}
const socialIconSize = 24;
const socialIcons: Record<SocialKey, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  website: FaGlobe,
};

function ProfileCard({
  username,
  avatar_url,
  bio,
  location,
  followers,
  following,
  public_repos,
  social,
  company,
}: ProfileCardProps) {
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header}>
        <div className={classes.image}>
          <Image src={avatar_url} width={100} height={100} alt="avatar" />
        </div>
        <div>
          <CardTitle className={classes.title}>{username}</CardTitle>
          <CardDescription className={classes.desc}>
            <p>{bio}</p>
            <div className={classes["icons-container"]}>
              {location && (
                <p>
                  <FaMapMarkerAlt className={classes["icon"]} />
                  {location}
                </p>
              )}
              {company && (
                <p>
                  <FaBuilding className={classes["icon"]} />
                  {company}
                </p>
              )}
            </div>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className={classes.content}>
        <div className={classes["content-col"]}>
          <span className={classes["content-value"]}>
            <CountUp
              from={0}
              to={followers}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
          </span>
          <span className={classes["content-label"]}>followers</span>
        </div>
        <div className={classes["content-col"]}>
          <span className={classes["content-value"]}>
            <CountUp
              from={0}
              to={following}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
          </span>
          <span className={classes["content-label"]}>following</span>
        </div>
        <div className={classes["content-col"]}>
          <span className={classes["content-value"]}>
            <CountUp
              from={0}
              to={public_repos}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
          </span>
          <span className={classes["content-label"]}>public repos</span>
        </div>
      </CardContent>
      <CardFooter className={classes.footer}>
        {social &&
          socialKeys.map((key) => {
            const Icon = socialIcons[key];
            const url = social[key];
            if (!url) return null;
            return (
              <Link key={key} href={url} className={classes["social-link"]}>
                <Icon size={socialIconSize} />
              </Link>
            );
          })}
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
