import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const handlerouting = (path: string): void => {
    router.push(path);
  };
  const handlelogout = () => {
    const token = localStorage.getItem("admintoken");
    if (token) {
      localStorage.removeItem("admintoken");
      handlerouting("/admin/signup");
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
