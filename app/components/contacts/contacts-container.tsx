import { classNames } from "~/utils/classnames";

type ContactsContainerProps = {
  children: React.ReactNode;
  hiddenOnMobile?: boolean;
};

export default function ContactsContainer({
  children,
  hiddenOnMobile = true,
}: ContactsContainerProps) {
  return (
    <div
      className={classNames(
        hiddenOnMobile ? "hidden xl:flex" : "flex",
        "flex-col flex-shrink-0 flex-1 xl:w-96 xl:flex-initial border-r border-gray-200"
      )}
    >
      {children}
    </div>
  );
}
