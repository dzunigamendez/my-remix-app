type ContactsHeaderProps = {
  children: React.ReactNode;
};

export default function ContactsHeader({ children }: ContactsHeaderProps) {
  return <div className="px-6 pt-6 pb-4">{children}</div>;
}
