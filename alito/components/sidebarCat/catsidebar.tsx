import React, { useState } from "react";
import {
  SidebarContainer,
  CategoryBox,
  CategoryHeader,
  CategoryTitle,
  ArrowIcon,
  BlogList,
  BlogTitle,
} from "./catsidebar.styles";

interface Blog {
  _id: string;
  title: string;
  category: string;
}

interface Props {
  blogs: Blog[];
  onSelect?: (blog: Blog) => void;
}

const CatSidebar: React.FC<Props> = ({ blogs, onSelect }) => {
  const categoryMap: Record<string, Blog[]> = {};
  blogs.forEach((blog) => {
    if (!categoryMap[blog.category]) {
      categoryMap[blog.category] = [];
    }
    categoryMap[blog.category].push(blog);
  });

  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  return (
    <SidebarContainer>
      {Object.entries(categoryMap).map(([category, blogList]) => (
        <CategoryBox key={category}>
          <CategoryHeader onClick={() => toggleCategory(category)}>
            <CategoryTitle>{category}</CategoryTitle>
            <ArrowIcon isOpen={openCategory === category}>▼</ArrowIcon>
          </CategoryHeader>
          {openCategory === category && (
            <BlogList>
              {blogList.map((blog) => (
                <BlogTitle
                  key={blog._id}
                  onClick={() => onSelect?.(blog)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      onSelect?.(blog);
                    }
                  }}
                >
                  {blog.title}
                </BlogTitle>
              ))}
            </BlogList>
          )}
        </CategoryBox>
      ))}
    </SidebarContainer>
  );
};

export { CatSidebar };
