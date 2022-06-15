type SubtitleProps = {
  children: React.ReactNode;
};

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className="text-lg font-medium text-gray-900">{children}</h2>;
}
