import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "@/layout";
import { blogType } from "@/types";
import { fetchBlog } from "./actions/get_blog";
interface fetchingBlogType {
  success: boolean;
  message: string | boolean;
  data?: blogType[];
}

const BlogDetailsPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogs, setblogs] = useState<blogType[] | null>([]);

  useEffect(() => {
    const getblog = async (): void => {
      const data: fetchingBlogType = await fetchBlog({ id });
      console.log("The data is:", data);
      if (data.success && data.data) {
        setblogs(data.data);
      }
    };
    getblog();
  }, []);
  return (
    <MainLayout>
      <h1>Blog Details for: {id}</h1>
      {blogs.length === 0 ? (
        <p>No Blog found associated with this id</p>
      ) : (
        blogs.map((blg) => {
          return (
            <div key={blg._id}>
              <h1>{blg.title}</h1>
              <h1>{blg.author}</h1>
              <h1>{blg.content}</h1>
            </div>
          );
        })
      )}
    </MainLayout>
  );
};

export default BlogDetailsPage;
