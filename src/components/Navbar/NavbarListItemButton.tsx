'use client';

import { cn } from '@/helpers/cn';
import { NavbarListItem } from './NavbarListItem';

type NavbarListItemButtonProps = React.ComponentProps<'button'>;

export const NavbarListItemButton = ({
  children,
  className,
}: NavbarListItemButtonProps) => {
  return (
    <NavbarListItem className={cn('p-0', className)}>
      <button className="flex gap-2 items-center rounded-lg p-2 w-full">
        {children}
      </button>
    </NavbarListItem>
  );
};
