import React from "react";
import { Dashboard } from "@/ui";
import { WithAdmin } from "@/hoc";

const index = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default WithAdmin(index);
