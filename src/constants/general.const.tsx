import {
  IconBuilding,
  IconMessage,
  IconPerson,
  IconProfile,
  IconStar,
} from "@/components/icons";
import { IconDashboard } from "@/components/icons";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard></IconDashboard>,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding></IconBuilding>,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPerson></IconPerson>,
    path: "/agent",
  },
  {
    title: "Review",
    icon: <IconStar></IconStar>,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessage></IconMessage>,
    path: "/message",
  },
  {
    title: "My Profile",
    icon: <IconProfile></IconProfile>,
    path: "/my-profile",
  },
];
