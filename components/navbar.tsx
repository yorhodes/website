import NextLink from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavPage } from '../types'

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
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
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
