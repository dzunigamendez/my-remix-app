import type { LinksFunction } from "@remix-run/node";
import styleUrl from "~/styles/one.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styleUrl,
    },
  ];
};

export default function RouteOne() {
  return <h2>This Route One</h2>;
}
