import StatCard, { StatCardProps } from "@/components/Dashboard/StatCard";
import classes from "./dashboard.module.css";
import { GitHubService } from "@/services/github.service";

async function DashboardPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const paramsRes = await params;
  const { stars, total_followers, total_repos } =
    await GitHubService.getUsetStats(paramsRes.username);
  const cards: Array<StatCardProps> = [
    {
      header: "Total Repositories",
      statValue: total_repos,
      iconType: "repo",
      footer: "Across all public projects",
    },
    {
      header: "Total Stars",
      statValue: total_followers,
      iconType: "star",
      footer: "From various projects",
    },
    {
      header: "Total Followers",
      statValue: stars,
      iconType: "follower",
      footer: "Your community engagement",
    },
  ];

  return (
    <>
      <h3 className={classes.title}>Dashboard Overview</h3>
      <h5 className={classes["section-title"]}>github stats</h5>
      <div className={classes["cards-section"]}>
        {cards.map((card) => (
          <StatCard key={card.header} {...card} />
        ))}
      </div>
    </>
  );
}

export default DashboardPage;
