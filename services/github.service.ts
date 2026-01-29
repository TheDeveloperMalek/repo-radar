import {
  GitHubUserDetails,
  GitHubUserRepo,
  GitHubUserSocialMedia,
  GitHubUserStats,
} from "@/types/github.types";
import axios from "axios";

export class GitHubService {
  static GitHubBaseUrl = "https://api.github.com/users/";
  static async getUserDetails(username: string): Promise<GitHubUserDetails> {
    const response = await axios.get<GitHubUserDetails>(
      `${this.GitHubBaseUrl}${username}`,
    );
    const userData = response.data;
    return userData;
  }

  static async getUserSocialMedia(username: string): Promise<{
    linkedin?: string;
    twitter?: string;
  }> {
    const response = await axios.get<GitHubUserSocialMedia[]>(
      `${this.GitHubBaseUrl}${username}/social_accounts`,
    );
    const returnedData = { linkedin: "", twitter: "" };
    response.data.forEach((media) => {
      const currentUrl = media.url;
      if (media.provider === "linkedin") returnedData.linkedin = currentUrl;
      if (media.provider === "twitter") returnedData.twitter = currentUrl;
    });
    return returnedData;
  }

  static async getUsetStats(username: string): Promise<GitHubUserStats> {
    const userDetailsResponse = await this.getUserDetails(username);
    const totalStarsResponse = await axios.get<{ stars: number }>(
      `https://api.github-star-counter.workers.dev/user/${username}`,
    );
    const { stars } = totalStarsResponse.data;
    const { public_repos, followers } = userDetailsResponse;
    const userStats: GitHubUserStats = {
      stars,
      total_repos: public_repos,
      total_followers: followers,
    };
    return userStats;
  }

  static async getUserRepos(
    username: string,
    count?: number,
  ): Promise<Array<GitHubUserRepo>> {
    const reposResponse = await axios.get<Array<GitHubUserRepo>>(
      `${this.GitHubBaseUrl}${username}/repos`,
    );
    const { data } = reposResponse;
    if (count) return data.slice(0, count);
    return data;
  }
}
