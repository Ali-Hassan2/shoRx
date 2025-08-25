import { BlogOption } from "@/components";
import { BLandingWrapper } from "./BLanding.styles";
interface optionsTypes {
  label: string;
  description: string;
}
const options: optionsTypes[] = [
  {
    label: "Write Blog",
    description: "Hello this is the blogs management page.",
  },
  {
    label: "Update your Blogs",
    description: "You can update your blogs here.",
  },
  {
    label: "Delete your Blogs",
    description: "You can delete your blogs here.",
  },
];

const BLanding = () => {
  return (
    <>
      <BLandingWrapper>
        <BlogOption options={options} />
      </BLandingWrapper>
    </>
  );
};

export { BLanding };
