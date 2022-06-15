type FieldProps = {
  children: React.ReactNode;
};

export default function Field({ children }: FieldProps) {
  return <div className="flex-1 min-w-0">{children}</div>;
}
