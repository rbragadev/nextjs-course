import Link from 'next/link';

import { cn } from '@/helpers/cn';
import { NavbarListItem } from './NavbarListItem';

type NavbarListItemLinkProps = React.ComponentProps<typeof Link>;

export const NavbarListItemLink = ({
  href,
  children,
  className,
}: NavbarListItemLinkProps) => {
  return (
    <NavbarListItem className={cn('p-0', className)}>
      <Link
        href={href}
        className="flex gap-2 items-center p-2 w-full rounded-lg"
      >
        {children}
      </Link>
    </NavbarListItem>
  );
};
