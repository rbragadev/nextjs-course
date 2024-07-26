import { cn } from '@/helpers/cn';

type NavbarListItemProps = React.ComponentProps<'li'>;

export const NavbarListItem = ({
  children,
  className,
}: NavbarListItemProps) => {
  return (
    <li
      className={cn(
        `my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-400 cursor-pointer flex gap-2 items-center hover:text-slate-100`,
        className,
      )}
    >
      {children}
    </li>
  );
};
