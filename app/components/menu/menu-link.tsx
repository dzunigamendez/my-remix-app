import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function MenuLink({ to, title, children, ...props }: LinkProps) {
  return (
    <li className="bg-white shadow overflow-hidden sm:rounded-md">
      <Link
        to={to}
        title={title}
        className="block px-4 sm:px-6 lg:px-8 py-4 hover:bg-gray-100"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
