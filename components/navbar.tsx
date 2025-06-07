import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { NavPage } from "../types";

const NavElem = (navPage: NavPage) => {
  const router = useRouter();
  const isActive = router.pathname === navPage.link;

  return (
    <NextLink
      href={navPage.link}
      key={navPage.text}
      passHref
      className={`px-3 py-1 rounded ${isActive ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'}`}
    >
      {navPage.text}
    </NextLink>
  );
};

const ToggleDarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded bg-gray-100 dark:bg-gray-800"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

const Navbar = (navPages: NavPage[]) => (
  <div className="flex flex-wrap items-center gap-3 py-5">
    {navPages.map(NavElem)}
    <div className="flex-grow" />
    <ToggleDarkModeButton />
  </div>
);

export default Navbar;
