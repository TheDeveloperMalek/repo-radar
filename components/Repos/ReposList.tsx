import { FaCode, FaStar } from "react-icons/fa";
import GlareHover from "../GlareHover";
import { GitBranch } from "lucide-react";
import Link from "next/link";
import AnimatedList from "../AnimatedList";
import { useRouter } from "next/navigation";
import { GitHubUserRepo } from "@/types/github.types";

function ReposList({
  gridDisplay,
  username,
  repos,
}: {
  gridDisplay: boolean;
  username: string;
  repos: Array<GitHubUserRepo>;
}) {
  const githubUrl = "https://github.com/";
  const router = useRouter();
  if (!gridDisplay)
    return (
      <AnimatedList
        items={repos.map((repo) => repo.name)}
        showGradients
        enableArrowNavigation
        displayScrollbar
        onItemSelect={(item) => router.push(`${githubUrl}${username}/${item}/`)}
        className="w-full"
      />
    );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map(
        ({
          name,
          description,
          updated_at,
          forks_count,
          stargazers_count,
          language,
          html_url,
        }) => (
          <GlareHover
            key={name}
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            height="100%"
            width="100%"
          >
            <Link
              href={`${html_url}`}
              target="_blank"
              className="rounded-xl p-4 h-full w-full flex flex-col justify-between"
            >
              <div>
                <h3>{name}</h3>
                <p className="text-neutral-500">{description}</p>
              </div>
              <div className=" w-full">
                {language && (
                  <p className="mt-2 flex items-center gap-2">
                    <FaCode />
                    {language}
                  </p>
                )}
                <hr className="my-2" />
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <span className="flex gap-1 items-center">
                      <FaStar />
                      {stargazers_count}
                    </span>
                    <span className="flex gap-1 items-center">
                      <GitBranch />
                      {forks_count}
                    </span>
                  </div>
                  <p>{new Date(updated_at).toDateString()}</p>
                </div>
              </div>
            </Link>
          </GlareHover>
        ),
      )}
    </div>
  );
}

export default ReposList;
