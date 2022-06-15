type InputGroupProps = {
  children: React.ReactNode;
};

export default function InputGroup({ children }: InputGroupProps) {
  return <div className="relative rounded-md shadow-sm">{children}</div>;
}
