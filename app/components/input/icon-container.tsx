type IconContainerProps = {
  children: React.ReactNode;
};

export default function IconContainer({ children }: IconContainerProps) {
  return (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      {children}
    </div>
  );
}
