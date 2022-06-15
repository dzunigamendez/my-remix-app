type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-10">{children}</div>
  );
}
