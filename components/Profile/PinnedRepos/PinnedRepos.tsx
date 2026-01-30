import SpotlightCard from "@/components/SpotlightCard";
import { PHRASE_MAX_LENGTH } from "@/config/constants";
import { PhraseSliceFormatter } from "@/lib/utils";
import { GitHubUserRepo } from "@/types/github.types";
import clsx from "clsx";
import { FaStar } from "react-icons/fa";

function PinnedRepos({ repos }: { repos: Array<GitHubUserRepo> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {repos.map(({ name, description, language, stargazers_count }) => (
        <SpotlightCard
          key={name}
          className="custom-spotlight-card"
          spotlightColor="rgba(48, 197, 210, 0.6)"
        >
          <h1 className="text-sky-500 mb-1 text-xl">{name}</h1>
          <h3>{PhraseSliceFormatter(description, PHRASE_MAX_LENGTH)}</h3>
          <div className="flex justify-between mt-12 self-end">
            <span
              className={clsx(language ? "bg-neutral-800 rounded-xl p-2" : "")}
            >
              {language}
            </span>
            <span className="flex items-center gap-2">
              <FaStar className="text-amber-400" />
              {stargazers_count}
            </span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}

export default PinnedRepos;
