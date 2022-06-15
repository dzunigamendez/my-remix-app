type ErrorProps = {
  children: React.ReactNode;
};

export default function ErrorMessage({ children }: ErrorProps) {
  return <div className="text-red-500">{children}</div>;
}
