import { ROUTES } from "@/lib";
import React from "react";
import { ANavbar } from "../dashboard/components";

const menuItems = [
  { label: "Home", path: ROUTES.ADMIN.DASHBOARD },
  { label: "Blogmgmt", path: ROUTES.ADMIN.BLOGMGMT },
  { label: "Adminmgmt", path: ROUTES.ADMIN.ADMINMGMT },
  { label: "Messages", path: ROUTES.ADMIN.MESSAGES },
];

const BlogsMgmt = () => {
  return (
    <>
      <ANavbar menuItems={menuItems} />
      
    </>
  );
};

export { BlogsMgmt };
