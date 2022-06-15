import type { LoaderFunction } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import { Center } from "~/components/container";
import { ErrorMessage } from "~/components/error";

export const loader: LoaderFunction = ({ params }) => {
  const notFound = params.notFound;
  throw new Response(`${notFound} not found`, {
    status: 404,
  });
};

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Center>
      <ErrorMessage>{caught.data}</ErrorMessage>
    </Center>
  );
}
