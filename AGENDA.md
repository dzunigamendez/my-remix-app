# remix.run

## Diego Zúniga

- Front-End Developer
- diego.zuniga.mendez@gmail.com
- https://github.com/dzunigamendez/my-remix-app

## Agenda

- Remix es un full-stack web framework?
  - CSR?
  - SSR?
- Requisitos
  - Node 14+
  - Npm 7+
  - VSCode
- Crear un nuevo proyecto
  - templates/stacks
  - `npx create-remix`
  - `npx create-remix@latest`
- Routing
- Styling
  ```ts
  import type { LinksFunction } from "@remix-run/node";
  import styles from "~/styles/global.css";
  export const links: LinksFunction = () {
    return [{ rel: "stylesheet", href: styles }];
  }
  ```
- Data Loading
  ```ts
  import type { LoaderFunction } from "@remix-run/node";
  export const loader: LoaderFunction = async ({ request }) => {};
  ```
- Data Writes

  ```ts
  import type { ActionFunction } from "@remix-run/node";
  export const action: ActionFunction = async ({ request }) => {};
  ```

- URL Parms
  ```ts
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  //--
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  ```
