import React from "react";
import {
  CardWrapper,
  CardImage,
  CardTitle,
  CardContent,
  CardMeta,
  MainWrapper,
  SidebarWrapper,
  ReadMoreButton,
  LikesPublishWrapper,
  LikesText,
  PublishDateText,
} from "./blogcard.styles";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

const Blogcard: React.FC<BlogcardProps> = ({ blog }) => {
  return (
    <CardWrapper>
      {blog.image?.url && <CardImage src={blog.image.url} alt={blog.title} />}
      <CardTitle>{blog.title}</CardTitle>
      <CardMeta>
        <span style={{ backgroundColor: "transparent" }}>{blog.category}</span>{" "}
        | <span style={{ backgroundColor: "transparent" }}>{blog.author}</span>
      </CardMeta>
      <CardContent>
        {blog.summary || blog.content.substring(0, 150) + "..."}
      </CardContent>

      <LikesPublishWrapper>
        <LikesText>
          <FiHeart
            style={{ marginRight: "6px", backgroundColor: "transparent" }}
          />
          {blog.likes}
        </LikesText>
        <PublishDateText>
          {new Date(blog.publish_Date).toLocaleDateString()}
        </PublishDateText>
      </LikesPublishWrapper>
      <Link href={`/blogs/${blog._id}`} passHref>
        <ReadMoreButton>Read More</ReadMoreButton>
      </Link>
    </CardWrapper>
  );
};

export { Blogcard };
