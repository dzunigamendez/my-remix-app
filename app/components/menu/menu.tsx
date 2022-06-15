type MenuProps = {
  children: React.ReactNode;
};

export default function MenuItem({ children }: MenuProps) {
  return (
    <nav>
      <ul className="space-y-3">{children}</ul>
    </nav>
  );
}
