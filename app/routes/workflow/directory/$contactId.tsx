import type { LoaderFunction } from "@remix-run/node";
import type { Profile } from "~/common/directory";
import { json } from "@remix-run/node";
import { getProfile } from "~/api/contacts";
import { useCatch, useLoaderData } from "@remix-run/react";
import { Breadcrumb, BreadcrumbLink } from "~/components/breadcrumb";
import ProfileDetail from "~/components/contacts/profile-detail";
import { ContactContainer } from "~/components/contacts";
import { Center } from "~/components/container";
import { ErrorMessage } from "~/components/error";

export const loader: LoaderFunction = async ({ params }) => {
  const contactId = parseInt(params.contactId!, 10);
  const profile = await getProfile(contactId);
  if (!profile) {
    throw new Response("We couldn't find that contact", {
      status: 404,
    });
  }
  return json(profile);
};

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <Center>
      <ErrorMessage>{caught.data}</ErrorMessage>
    </Center>
  );
}

export default function ContactDetail() {
  const profile = useLoaderData<Profile>();

  return (
    <ContactContainer>
      <Breadcrumb>
        <BreadcrumbLink to="/workflow/directory">
          <span>Directory</span>
        </BreadcrumbLink>
      </Breadcrumb>
      <ProfileDetail data={profile} />
    </ContactContainer>
  );
}
