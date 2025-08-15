import { useRouter } from "next/router";
import { MainLayout } from "@/layout";
import React, { useEffect } from "react";

const BlogDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id) console.log("The id is:", id);
  }, [id]);

  if (!id) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>Blog Details for: {id}</h1>
    </MainLayout>
  );
};

export default BlogDetailsPage;
