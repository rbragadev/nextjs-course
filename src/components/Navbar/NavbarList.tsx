import { cn } from '@/helpers/cn';

type NavbarListProps = React.ComponentProps<'ul'>;

export const NavbarList = ({ children, className }: NavbarListProps) => {
  return (
    <ul
      className={cn(
        `my-4 border-t border-indigo-400/20 hover:border-indigo-400/40`,
        className,
      )}
    >
      {children}
    </ul>
  );
};
