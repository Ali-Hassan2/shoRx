import React from "react";
import { adminlogout } from "./actions/admin";
import { showError } from "@/Utils";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const handlerouting = (path: string): void => {
    router.push(path);
  };
  const handlelogout = async () => {
    try {
      const result = await adminlogout();
      if (result.success) {
        showError("Logout Successfull.");
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
    <div>
      Welcome to admin Dashboard
      <button onClick={handlelogout}>Logout</button>
    </div>
  );
};

export { Dashboard };
