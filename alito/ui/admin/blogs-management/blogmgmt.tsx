import { ROUTES } from "@/lib";
import React from "react";
import { ANavbar } from "../dashboard/components";
import { BlogMgmtWrapper } from "./blogsmgmt.styles";
import { BLanding } from "./components";
const menuItems = [
  { label: "Home", path: ROUTES.ADMIN.DASHBOARD },
  { label: "Blogmgmt", path: ROUTES.ADMIN.BLOGMGMT },
  { label: "Adminmgmt", path: ROUTES.ADMIN.ADMINMGMT },
  { label: "Messages", path: ROUTES.ADMIN.MESSAGES },
];

const BlogsMgmt = () => {
  return (
    <>
      <BlogMgmtWrapper>
        <ANavbar menuItems={menuItems} activePath={ROUTES.ADMIN.BLOGMGMT} />
        <BLanding />
      </BlogMgmtWrapper>
    </>
  );
};

export { BlogsMgmt };
