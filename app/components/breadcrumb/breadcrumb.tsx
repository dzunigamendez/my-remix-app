type BreadcrumbProps = {
  children: React.ReactNode;
};

export default function Breadcrumb({ children }: BreadcrumbProps) {
  return (
    <nav
      className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
      aria-label="Breadcrumb"
    >
      {children}
    </nav>
  );
}
