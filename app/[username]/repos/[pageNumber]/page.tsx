"use client";
import ReposList from "@/components/Repos/ReposList";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input/input";
import { ITEMS_PER_PAGE } from "@/config/constants";
import clsx from "clsx";
import { LayoutGrid, List } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import classes from "./repos.module.css";
import { CustomPagination } from "@/components/ui/CustomPagination/CustomPagination";
import { GitHubUserRepo } from "@/types/github.types";
import { GitHubService } from "@/services/github.service";

function ReposPage() {
  const params = useParams<{ username: string; pageNumber: string }>();
  const startIndex = Number(params.pageNumber) * Number(ITEMS_PER_PAGE);

  const [gridView, setGridView] = useState(true);
  const [totalRepos, setTotalRepos] = useState(0);

  const [allRepos, setAllRepos] = useState<GitHubUserRepo[]>([]);
  const [displayedRepos, setDisplayedRepos] = useState<GitHubUserRepo[]>([]);

  const pagesCount = Math.floor(totalRepos / ITEMS_PER_PAGE);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleGridViewClick = () => setGridView(true);
  const handleListViewClick = () => setGridView(false);

  const handleSearchTextChange = () => {
    const searchValue = searchInputRef.current?.value || "";

    if (searchValue.trim() === "") {
      const slicedRepos = allRepos.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
      );
      setDisplayedRepos(slicedRepos);
      return;
    }

    const regex = new RegExp(searchValue, "i");
    const filteredRepos = allRepos.filter((repo) => regex.test(repo.name));
    setDisplayedRepos(filteredRepos);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      const repos = await GitHubService.getUserRepos(params.username);

      setAllRepos(repos);
      setTotalRepos(repos.length);

      const slicedRepos = repos.slice(startIndex, startIndex + ITEMS_PER_PAGE);
      setDisplayedRepos(slicedRepos);
    };

    fetchRepos();
  }, [params, startIndex]);

  return (
    <>
      <h3 className={classes["section-head"]}>repository list</h3>
      <div className={classes["header-toolbox"]}>
        <Input
          ref={searchInputRef}
          onChange={handleSearchTextChange}
          placeholder="Search repositories by name"
          className={classes["search-input"]}
        />
        <div className={classes["view-controllers"]}>
          <Button
            onClick={handleGridViewClick}
            className={clsx(
              classes["view-btn-controller"],
              gridView && classes["active"],
            )}
          >
            <LayoutGrid />
          </Button>
          <Button
            onClick={handleListViewClick}
            className={clsx(
              classes["view-btn-controller"],
              !gridView && classes["active"],
            )}
          >
            <List />
          </Button>
        </div>
      </div>
      <ReposList
        repos={displayedRepos}
        gridDisplay={gridView}
        username={params.username}
      />
      <CustomPagination
        className={classes.pagination}
        count={pagesCount}
        initialActive={Number(params.pageNumber)}
      />
    </>
  );
}

export default ReposPage;
