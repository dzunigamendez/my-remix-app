type InnerContentProps = {
  children: React.ReactNode;
};

export default function InnerContent({ children }: InnerContentProps) {
  return (
    <div className="flex-1 relative z-0 flex overflow-hidden">{children}</div>
  );
}
