import React, { useEffect, useState } from "react";
import { MainLayout } from "@/layout";
import { fetchingBlogs } from "./actions/gettingblogs";
import { Blogcard, CatSidebar } from "@/components";
import {
  BlogCardWrapper,
  PageWrapper,
  HeadingWrapper,
  ContentWrapper,
  HeadingOne,
  CardWrapper,
  SidebarWrapper,
} from "./blogs.styles";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: {
    public_id: string;
    url: string;
  };
  author: string;
  category: string;
  tags: string[];
  publish_Date: Date;
  update_Date: Date;
  slug: string;
  likes: string;
  likedIP: string[];
  summary?: string;
}

interface BlogFace {
  success: boolean;
  message: string | boolean;
  data?: Blog[];
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredCategory, setFilteredCategory] = useState<string | null>(null);

  useEffect(() => {
    const gettingBlogs = async () => {
      const data: BlogFace = await fetchingBlogs();
      if (data.success && data.data) {
        setBlogs(data.data);
      }
    };
    gettingBlogs();
  }, []);

  const displayedBlogs = filteredCategory
    ? blogs.filter((blog) => blog.category === filteredCategory)
    : blogs;

  const handleCategorySelect = (blog: Blog) => {
    setFilteredCategory(blog.category);
  };

  return (
    <MainLayout>
      <PageWrapper>
        <HeadingWrapper>
          <HeadingOne>Blogs</HeadingOne>
        </HeadingWrapper>
        <ContentWrapper>
          <SidebarWrapper>
            <CatSidebar blogs={blogs} onSelect={handleCategorySelect} />
          </SidebarWrapper>

          <CardWrapper>
            {displayedBlogs.length === 0 ? (
              <p>No blogs found for this category.</p>
            ) : (
              displayedBlogs.map((blg) => (
                <BlogCardWrapper key={blg._id}>
                  <Blogcard blog={blg} />
                </BlogCardWrapper>
              ))
            )}
          </CardWrapper>
        </ContentWrapper>
      </PageWrapper>
    </MainLayout>
  );
};

export { Blogs };
