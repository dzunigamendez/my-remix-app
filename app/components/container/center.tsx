import { classNames } from "~/utils/classnames";

type CenterProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Center({ children, className = "" }: CenterProps) {
  return (
    <div
      className={classNames(
        className,
        "flex-1 flex justify-center items-center"
      )}
    >
      {children}
    </div>
  );
}
