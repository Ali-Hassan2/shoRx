import React from "react";
import {
  LoginContainer,
  Header,
  HeadingOne,
  HeadingTwo,
  Content,
  Label,
  Input,
  Button,
  Checker,
  Anchor,
} from "./login.styles";
import { useRouter } from "next/navigation";

interface AdminLoginProps {
  setemail: (val: string) => void;
  setpassword: (val: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  password: string;
}

const AdminLogin = ({
  setemail,
  setpassword,
  email,
  password,
  onSubmit,
}: AdminLoginProps) => {
  const router = useRouter();

  const handleRoute = (path: string) => {
    router.push(path);
  };

  return (
    <LoginContainer>
      <Header>
        <HeadingOne>Login to your account</HeadingOne>
        <HeadingTwo>Enter your details to login to your account.</HeadingTwo>
      </Header>

      <form
        action=""
        onSubmit={onSubmit}
        style={{ backgroundColor: "transparent" }}
      >
        <Content>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="n123@shorx.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Content>
        <Content>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
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
            Login
          </Label>
        </Button>
      </form>

      <Checker>
        Already have an account?{" "}
        <Anchor onClick={() => handleRoute("/admin/signup")}>
          Sign up here.
        </Anchor>
      </Checker>
    </LoginContainer>
  );
};

export { AdminLogin };
