import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import type { NavigationItem } from "~/common/navigation";
import type { User } from "~/common/user";
import type { ShouldReloadFunction } from "@remix-run/react";

import { json } from "@remix-run/node";
import stylesUrl from "~/styles/users.css";
import { getNavigation, getSecondaryNavigation } from "~/api/navigation";
import { getUser } from "~/api/user";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Sidebar } from "~/components/sidebar";
import { useState } from "react";
import { FullContainer, Content, InnerContent } from "~/components/container";
import SidebarToggle from "~/components/sidebar/sidebar-toggle";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

type RoutingData = {
  navigation: NavigationItem[];
  secondaryNavigation: NavigationItem[];
  user: User;
};

export const loader: LoaderFunction = async () => {
  const navigation = await getNavigation();
  const secondaryNavigation = await getSecondaryNavigation();
  const user = await getUser();
  return json<RoutingData>({
    navigation,
    secondaryNavigation,
    user,
  });
};

// WARNING!!!!
export const unstable_shouldReload: ShouldReloadFunction = () => false;

export default function Workflow() {
  const { user, navigation, secondaryNavigation } =
    useLoaderData<RoutingData>();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <FullContainer>
      <Sidebar
        user={user}
        navigation={navigation}
        secondaryNavigation={secondaryNavigation}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Content>
        <SidebarToggle onOpen={() => setSidebarOpen(true)} />
        <InnerContent>
          <Outlet />
        </InnerContent>
      </Content>
    </FullContainer>
  );
}
