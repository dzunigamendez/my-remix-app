type ContentProps = {
  children: React.ReactNode;
};

export default function Content({ children }: ContentProps) {
  return (
    <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
      {children}
    </div>
  );
}
