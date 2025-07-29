import React, { useState } from "react";
import { AdminSignup } from "@/components";
import { PageWrapper, HeadingOne } from "./signup.styles";
import { useRouter } from "next/navigation";
import { creatingadmin } from "./actions/creatingadmin";
const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log("The name is:", formData.name);
  console.log("The email is:", formData.email);
  console.log("The password is:", formData.password);

  const handleRouting = (path: string) => {
    router.push(path);
  };

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const payload = { name, email, password };
    try {
      const result = await creatingadmin();
      console.log("The signup result is:", result);
      if (result.success) {
        console.log("Admin created successfully");
        alert("Admin created.");
      }
    } catch (error) {
      console.log("Something went wrong");
      alert("Cannot create an admin");
    }
  };
  return (
    <div>
      <PageWrapper>
        <HeadingOne>
          <span className="shoRx">shoRx</span>
          <span className="registered">®</span>
        </HeadingOne>
        <AdminSignup
          onSubmit={handlesubmit}
          name={formData.name}
          email={formData.email}
          password={formData.password}
          onChange={handleChange}
        />
      </PageWrapper>
    </div>
  );
};

export { SignUp };
