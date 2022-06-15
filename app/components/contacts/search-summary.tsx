type SearchSummaryProps = {
  children: React.ReactNode;
};

export default function SearchSummary({ children }: SearchSummaryProps) {
  return <p className="mt-1 text-sm text-gray-600">{children}</p>;
}
