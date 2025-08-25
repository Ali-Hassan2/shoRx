import React from "react";
import { adminlogout } from "./actions/admin";
import { showError, showSuccess } from "@/Utils";
import { useRouter } from "next/navigation";
import { ANavbar } from "./components";
import { PageWrapper } from "./dashboard.styles";
import { ROUTES } from "@/lib/Routes";
const Dashboard = () => {
  const router = useRouter();
  const handlerouting = (path: string): void => {
    router.push(path);
  };
  const menuItems = [
    { label: "Home", path: ROUTES.ADMIN.DASHBOARD },
    { label: "Blogmgmt", path: ROUTES.ADMIN.BLOGMGMT },
    { label: "Adminmgmt", path: "/admin/adminmgmt" },
    { label: "Messages", path: "/admin/messages" },
  ];
  const handlelogout = async () => {
    try {
      const result = await adminlogout();
      if (result.success) {
        showSuccess("Logout Successfull.");
        handlerouting("/admin/login");
      } else {
        showError(`Cannot logout. ${result?.message}`);
      }
    } catch (error: unknown) {
      console.log("Unexpected error.", error);
      showError("Something went wrong. Please try again.");
    }
  };
  return (
    <PageWrapper>
      <ANavbar menuItems={menuItems} activePath="/admin/dashboard" />
      Welcome to admin Dashboard
      <button onClick={handlelogout}>Logout</button>
    </PageWrapper>
  );
};

export { Dashboard };
