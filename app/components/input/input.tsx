export default function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <input
      className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
      {...props}
    />
  );
}
