import { Link, Outlet } from "@remix-run/react";

export default function Routing() {
  return (
    <div>
      <h1>Routing</h1>
      <ul>
        <li>
          <Link to="./one">Route One</Link>
        </li>
        <li>
          <Link to="./two">Route Two</Link>
        </li>
        <li>
          <Link to="../outside">Route Outside</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
