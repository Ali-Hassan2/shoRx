import { ROUTES } from "./Routes";
import { useRouter } from "next/navigation";

const useNavigations = () => {
  const router = useRouter();
  return {
    goHome: () => router.push(ROUTES.HOME),
    goAbout: () => router.push(ROUTES.ABOUT),
    goContact: () => router.push(ROUTES.CONTACT),
    goDashboard: () => router.push(ROUTES.ADMIN.DASHBOARD),
    goLogin: () => router.push(ROUTES.ADMIN.LOGIN),
    goSignup: () => router.push(ROUTES.ADMIN.SIGNUP),
    goBlogmgmt: () => router.push(ROUTES.ADMIN.BLOGMGMT),
  };
};

export { useNavigations };
