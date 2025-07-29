import React from "react";
import {
  SignUpContainer,
  Header,
  HeadingOne,
  HeadingTwo,
  Content,
  Label,
  Input,
  Button,
  Checker,
  Anchor,
} from "./adminsignup.styles";
import { useRouter } from "next/navigation";

interface AdminSignupProps {
  name: string;
  email: string;
  password: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (field: string, value: string) => void;
}
const AdminSignup = ({
  name,
  email,
  password,
  onChange,
  setname,
  setemail,
  setpassword,
  onSubmit,
}: AdminSignupProps) => {
  const router = useRouter();
  const handleRoute = async (path: string): void => {
    router.push(path);
  };
  return (
    <SignUpContainer>
      <Header>
        <HeadingTwo>Enter your details to create an account.</HeadingTwo>
      </Header>
      <form
        action=""
        onSubmit={onSubmit}
        style={{ backgroundColor: "transparent" }}
      >
        <Content>
          <Label>Name</Label>
          <Input
            value={name}
            type="text"
            placeholder="Your Name.."
            onChange={(e) => onChange("name", e.target.value)}
          />
        </Content>
        <Content>
          <Label>Email</Label>
          <Input
            value={email}
            type="text"
            placeholder="n123@shorx.com"
            onChange={(e) => onChange("email", e.target.value)}
          />
        </Content>
        <Content style={{ marginTop: "17px" }}>
          <Label>Password</Label>
          <Input
            value={password}
            type="password"
            placeholder=""
            onChange={(e) => onChange("password", e.target.value)}
          />
        </Content>
        <Button type="submit">
          <Label
            style={{
              color: "black",
              fontSize: "14px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Sign up
          </Label>
        </Button>
      </form>

      <Checker>
        Already have accout?{" "}
        <Anchor onClick={() => handleRoute("/admin/login")}>Login here.</Anchor>
      </Checker>
    </SignUpContainer>
  );
};

export { AdminSignup };
