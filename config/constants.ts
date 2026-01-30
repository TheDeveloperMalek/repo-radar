const ITEMS_PER_PAGE = 9;
const ROUTE_MAX_DEPTH = 3;
const PAGINATION_MAX_PILLS = 5;
const PHRASE_MAX_LENGTH = { long: 15, short: 10 };

const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  repos: "/repos/0",
  profile: "/profile",
};

const DEVELOPER_LINKS = {
  projectSrouce: "https://github.com/TheDeveloperMalek/repo-radar",
  linkedin: "https://www.linkedin.com/in/malekalset/",
};

export {
  ROUTES,
  DEVELOPER_LINKS as DEVELOPERLINKS,
  ITEMS_PER_PAGE,
  ROUTE_MAX_DEPTH,
  PAGINATION_MAX_PILLS,
  PHRASE_MAX_LENGTH,
};
