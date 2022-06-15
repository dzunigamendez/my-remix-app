type ContactContainerProps = {
  children: React.ReactNode;
};

export default function ContactContainer({ children }: ContactContainerProps) {
  return (
    <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      {children}
    </div>
  );
}
