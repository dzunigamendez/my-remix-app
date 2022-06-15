import { ChevronLeftIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

type BreadcrumbLinkProps = {
  children: React.ReactNode;
  to: string;
};

export default function BreadcrumbLink({ to, children }: BreadcrumbLinkProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
    >
      <ChevronLeftIcon
        className="-ml-2 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
      {children}
    </Link>
  );
}
