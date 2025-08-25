import {
  LandingWrapper,
  HeadingMain,
  Buttons,
  BlogButton,
} from "./admin-dashboard-landing.styles";
import { useNavigations } from "@/lib";
const ALanding = () => {
  const { goBlogmgmt } = useNavigations();
  return (
    <>
      <LandingWrapper>
        <HeadingMain>Welcome, to Admin Dashboard.</HeadingMain>
        <Buttons>
          <BlogButton onClick={goBlogmgmt}>Check Blogs </BlogButton>
        </Buttons>
      </LandingWrapper>
    </>
  );
};

export { ALanding };
