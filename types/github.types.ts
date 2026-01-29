interface GitHubUserDetails {
  name: string;
  company: string;
  location: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  blog: string;
  html_url: string;
}

interface GitHubUserSocialMedia {
  provider: string;
  url: string;
}

interface GitHubUserStats {
  total_repos: number;
  stars: number;
  total_followers: number;
}

interface GitHubUserRepo {
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  html_url: string;
}
export type {
  GitHubUserDetails,
  GitHubUserSocialMedia,
  GitHubUserStats,
  GitHubUserRepo,
};
