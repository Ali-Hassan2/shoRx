"use client";

import { useEffect, useState, createContext, ReactNode } from "react";
import { Admin } from "@/types/admin";

interface adminContextTypes {
  admin: Admin | null;
  setadmin: (admin: Admin | null) => void;
}

const AdminContext = createContext<adminContextTypes>({
  admin: null,
  setadmin: () => {},
});

interface AdminProps {
  children: ReactNode;
}

function AdminProvider({ children }: AdminProps) {
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin-info");
    if (storedAdmin) {
      try {
        const parsed = JSON.parse(storedAdmin);
        setAdmin(parsed);
      } catch (error) {
        console.log(`There is an error: ${error}`);
        setAdmin(null);
      }
    }
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminContext, AdminProvider };
