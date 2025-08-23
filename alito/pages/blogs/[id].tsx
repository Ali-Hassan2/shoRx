import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MainLayout } from "@/layout";
import { blogType } from "@/types";
import { fetchBlog } from "./actions/get_blog";
import { useParams } from "next/navigation";

interface fetchingBlogType {
  success: boolean;
  message: string | boolean;
  data?: blogType[];
}

const BlogDetailsPage: React.FC = () => {
  const params = useParams();
  const ID = params?.id;
  const [blogs, setBlogs] = useState<blogType[] | null>([]);

  useEffect(() => {
    if (!ID) return;
    const getBlog = async () => {
      console.log("Fetching blog for ID:", ID);
      const data: fetchingBlogType = await fetchBlog({ id: ID as string });
      console.log("Fetched data:", data);

      if (data.success && data.data) {
        setBlogs(Array.isArray(data.data) ? data.data : [data.data]);
      }
    };

    getBlog();
  }, [ID]);
  return (
    <MainLayout>
      <h1>Blog Details for: {ID}</h1>
      {blogs?.length === 0 ? (
        <p>No Blog found associated with this id</p>
      ) : (
        blogs.map((blg) => (
          <div key={blg._id}>
            <h1>{blg.title}</h1>
            <h1>{blg.author}</h1>
            <h1>{blg.content}</h1>
          </div>
        ))
      )}
    </MainLayout>
  );
};

export default BlogDetailsPage;
