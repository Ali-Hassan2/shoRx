import { ROUTES } from "./Routes";
import { useRouter } from "next/navigation";

const useNavigations = () => {
  const router = useRouter();
  return {
    goHome: () => router.push(ROUTES.HOME),
  };
};

export { useNavigations };
