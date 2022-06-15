type FullContainerProps = {
  children: React.ReactNode;
};

export default function FullContainer({ children }: FullContainerProps) {
  return <div className="h-full flex">{children}</div>;
}
