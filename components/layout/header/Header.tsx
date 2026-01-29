import { ROUTES } from "@/config/constants";
import NavBar from "@/components/layout/Navbar";

const navLinksNames = Object.keys(ROUTES) as Array<keyof typeof ROUTES>;
const rawNavLinks = navLinksNames.map((name) => ({
  name,
  href: ROUTES[name],
}));

function Header({ username }: { username: string }) {
  const navLinks = rawNavLinks.map(({ name, href }) => ({
    label: name,
    href: href !== "/" ? `/${username}${href}` : href,
  }));
  return (
    <header className="fixed w-full z-1">
      <NavBar items={navLinks} />
    </header>
  );
}

export default Header;
