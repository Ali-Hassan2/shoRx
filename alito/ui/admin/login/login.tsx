"use client";

import React, { useState } from "react";
import { PageWrapper, HeadingOne } from "./login.styles";
import { AdminLogin } from "@/components";
import { loginAdmin } from "./actions/loginadmin";
import { useRouter } from "next/navigation";
import { showSuccess, showError } from "@/Utils";

const Login = () => {
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = { email, password };
    try {
      const result = await loginAdmin({ body });
      localStorage.setItem("admin-info", JSON.stringify(result.data));
      localStorage.setItem("admintoken", result.token || "");
      if (result.success) {
        showSuccess("Login Successfull.");
        router.push("/blogs");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log("Unexpected error:", error);
      showError("Something went wrong. Try again.");
    }
  };
  return (
    <PageWrapper>
      <HeadingOne>
        <span className="shoRx">shoRx</span>
        <span className="registered">®</span>
      </HeadingOne>
      <AdminLogin
        email={email}
        password={password}
        setemail={setemail}
        setpassword={setpassword}
        onSubmit={handlesubmit}
      />
    </PageWrapper>
  );
};
export { Login };
