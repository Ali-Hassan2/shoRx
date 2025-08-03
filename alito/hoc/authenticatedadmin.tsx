import { showError } from "@/Utils";
import { useRouter } from "next/navigation";
import { useState, useEffect, ComponentTypes } from "react";

const WithAdmin = <P extends object>(WrappedComponents: ComponentTypes<P>) => {
  const Authentication = (props: P) => {
    const router = useRouter();
    const [isverified, setisverified] = useState<boolean>(false);

    const handleRouting = (path: string) => {
      router.push(path);
    };

    useEffect(() => {
      const token = localStorage.getItem("admintoken");
      if (!token) {
        showError("You are not authenticated.");
        handleRouting("/admin/login");
      } else {
        setisverified(true);
      }
    }, []);

    if (!isverified) return null;

    return <WrappedComponents {...prop} />;
  };
  return Authentication;
};

export { WithAdmin };
