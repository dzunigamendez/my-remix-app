import type { FormProps } from "@remix-run/react";
import { Form } from "@remix-run/react";

export default function SearchForm(props: FormProps) {
  return <Form className="mt-6 flex space-x-4" {...props} />;
}
