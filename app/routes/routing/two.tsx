import type { LinksFunction } from "@remix-run/node";
import styleUrl from "~/styles/two.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleUrl,
    },
  ];
};

export default function RouteTwo() {
  return <h2>This Route Two</h2>;
}
