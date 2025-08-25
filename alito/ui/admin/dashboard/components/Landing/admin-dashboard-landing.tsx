import {
  LandingWrapper,
  HeadingMain,
  Buttons,
} from "./admin-dashboard-landing.styles";
const ALanding = () => {
  return (
    <>
      <LandingWrapper>
        <HeadingMain>Welcome, to Admin Dashboard.</HeadingMain>
        <Buttons>
          <BlogButton>Check Blogs </BlogButton>
        </Buttons>
      </LandingWrapper>
    </>
  );
};

export { ALanding };
