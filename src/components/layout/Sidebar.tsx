import { sidebarLinks } from "@/constants/general.const";
import { TSidebarLink } from "@/types/general.types";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  // console.log("🚀 ~ file: Sidebar.tsx:8 ~ Sidebar ~ router:", router);
  return (
    <div className="px-4 py-6 bg-grayfc">
      {sidebarLinks.map((link) => (
        <SidebarLink
          isActive={pathname === link.path}
          key={link.title}
          link={link}
        ></SidebarLink>
      ))}
    </div>
  );
};
interface ISidebarLinkProps {
  link: TSidebarLink;
  isActive: boolean;
}

function SidebarLink({ link, isActive }: ISidebarLinkProps) {
  return (
    <Link
      href={link.path}
      key={link.title}
      className={`flex items-center px-6 py-4 text-base font-bold gap-c10 text-gray80 rounded-xl  ${
        isActive ? "bg-primary text-grayfc" : "hover:text-primary"
      }`}
    >
      <span>{link.icon}</span>
      <span>{link.title}</span>
    </Link>
  );
}

export default Sidebar;
