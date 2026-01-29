import PinnedRepos from "@/components/Profile/PinnedRepos/PinnedRepos";
import ProfileCard from "@/components/Profile/ProfileCard/ProfileCard";
import SectionWrapper from "@/components/Profile/SectionWrapper/SectionWrapper";
import { GitHubService } from "@/services/github.service";

async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const {
    avatar_url,
    bio,
    company,
    followers,
    following,
    name,
    public_repos,
    location,
    blog,
    html_url,
  } = await GitHubService.getUserDetails(username);
  const { linkedin, twitter } =
    await GitHubService.getUserSocialMedia(username);
  const repos = await GitHubService.getUserRepos(username, 9);
  return (
    <>
      <ProfileCard
        avatar_url={avatar_url}
        username={name}
        bio={bio}
        followers={followers}
        following={following}
        public_repos={public_repos}
        location={location}
        company={company}
        social={{
          github: html_url,
          linkedin,
          twitter,
          website: blog,
        }}
      />
      <SectionWrapper title="pinned repositories">
        <PinnedRepos repos={repos} />
      </SectionWrapper>
    </>
  );
}

export default ProfilePage;
