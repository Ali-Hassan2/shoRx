interface blogsType {
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
  publish_Data: Date;
  update_Date: Date;
  slug?: string;
  likes?: string;
  likedIP?: string;
  summary: string;
}

export { blogsType };
