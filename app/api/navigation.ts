import type { NavigationItem } from "~/common/navigation";

export function getNavigation(): Promise<NavigationItem[]> {
  return Promise.resolve([
    { name: "Dashboard", href: "/workflow/dashboard", icon: "HomeIcon" },
    { name: "Calendar", href: "/workflow/calendar", icon: "CalendarIcon" },
    { name: "Teams", href: "/workflow/teams", icon: "UserGroupIcon" },
    {
      name: "Directory",
      href: "/workflow/directory",
      icon: "SearchCircleIcon",
    },
    {
      name: "Announcements",
      href: "/workflow/announcements",
      icon: "SpeakerphoneIcon",
    },
    { name: "Office Map", href: "/workflow/office", icon: "MapIcon" },
  ]);
}

export function getSecondaryNavigation(): Promise<NavigationItem[]> {
  return Promise.resolve([
    { name: "Apps", href: "#", icon: "ViewGridAddIcon" },
    { name: "Settings", href: "#", icon: "CogIcon" },
  ]);
}
