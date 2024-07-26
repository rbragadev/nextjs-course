import { cn } from '@/helpers/cn';
import {
  GamesIcon,
  HomeIcon,
  Top10Icon,
  UserIcon,
  WalkThroughsIcon,
} from '../Icons';

import { NavbarList } from './NavbarList';
import { NavbarListItemLink } from './NavbarListItemLink';
import { NavbarListItemButton } from './NavbarListItemButton';

type NavbarProps = React.ComponentProps<'nav'>;

export const Navbar = ({ className, ...props }: NavbarProps) => {
  return (
    <nav
      className={cn(
        'flex h-screen flex-col bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 p-2 text-slate-300',
        className,
      )}
    >
      <div className="flex items-center justify-center my-4">
        <img
          src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png"
          alt="logo"
          className="w-auto h-12 p-2"
        />
      </div>
      <NavbarList className={'flex-grow'}>
        <NavbarListItemLink href="/">
          <HomeIcon className="w-4 h-4" /> Home
        </NavbarListItemLink>
        <NavbarListItemLink href="/games">
          <GamesIcon className="w-4 h-4" /> Games
        </NavbarListItemLink>
        <NavbarListItemLink href="/top10">
          <Top10Icon className="w-4 h-4" /> Top 10
        </NavbarListItemLink>
        <NavbarListItemLink href="/walkthroughts">
          <WalkThroughsIcon className="w-4 h-4" /> Walkthroughts
        </NavbarListItemLink>
      </NavbarList>
      <NavbarList>
        <NavbarListItemLink href="/user">
          <UserIcon className="w-4 h-4" /> User
        </NavbarListItemLink>
      </NavbarList>
    </nav>
  );
};
