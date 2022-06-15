type MenuItemProps = {
  children: React.ReactNode;
};

export default function MenuItem({ children }: MenuItemProps) {
  return (
    <li className="bg-white shadow overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:rounded-md">
      {children}
    </li>
  );
}
