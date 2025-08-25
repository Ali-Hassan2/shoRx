import { ROUTES } from "@/lib";
import React from "react";

const menuItems = [
  { label: "Home", path: ROUTES.ADMIN.DASHBOARD },
  { label: "Blogmgmt", path: ROUTES.ADMIN.BLOGMGMT },
  { label: "Adminmgmt", path: ROUTES.ADMIN.ADMINMGMT },
  { labe: "Messages", path: ROUTES.ADMIN.MESSAGES },
];

const BlogsMgmt = () => {
  return <div>This is blogs mgmt</div>;
};

export { BlogsMgmt };
