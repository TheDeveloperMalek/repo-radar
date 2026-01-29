import CountUp from "../CountUp";
import { GitBranch, Star, Users } from "lucide-react";

export interface StatCardProps {
  header: string;
  footer: string;
  statValue: number;
  iconType: "repo" | "star" | "follower";
}

function StatCard({ header, footer, statValue, iconType }: StatCardProps) {
  const svgIcon =
    iconType === "star" ? (
      <Star />
    ) : iconType === "repo" ? (
      <GitBranch />
    ) : (
      <Users />
    );
  return (
    <div className="border border-neutral-500 p-4 rounded-3xl hover:-translate-y-4 transition-transform duration-300">
      <div className="flex justify-between">
        <p className="text-neutral-400">{header}</p>
        {svgIcon}
      </div>
      <p className="text-3xl font-bold min-h-12">
        <CountUp to={statValue} />
      </p>
      <p className="mt-12 text-neutral-600">{footer}</p>
    </div>
  );
}

export default StatCard;
