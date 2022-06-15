import type { Contacts } from "~/common/directory";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { SearchIcon } from "@heroicons/react/solid";
import { Outlet, useLoaderData, useParams, useSubmit } from "@remix-run/react";
import { Subtitle } from "~/components/header";
import {
  SearchSummary,
  SearchForm,
  ContactsContainer,
  ContactsHeader,
  ContactNav,
} from "~/components/contacts";
import { Field } from "~/components/field";
import { IconContainer, Input, InputGroup } from "~/components/input";
import { searchContacts } from "~/api/contacts";

export const loader: LoaderFunction = async () => {
  const contacts = await searchContacts();
  return json(contacts);
};

export default function Directory() {
  const params = useParams();
  const isContactSelected = !!params.contactId;
  const contacts = useLoaderData<Contacts>();

  return (
    <>
      <ContactsContainer hiddenOnMobile={isContactSelected}>
        <ContactsHeader>
          <Subtitle>Directory</Subtitle>
          <SearchSummary>Search directory of 3,018 employees</SearchSummary>
          <SearchForm method="get">
            <Field>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <InputGroup>
                <IconContainer>
                  <SearchIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </IconContainer>
                <Input
                  id="search"
                  type="search"
                  name="search"
                  placeholder="Search"
                  autoComplete="off"
                />
              </InputGroup>
            </Field>
          </SearchForm>
        </ContactsHeader>
        <ContactNav data={contacts} />
      </ContactsContainer>
      <Outlet />
    </>
  );
}
